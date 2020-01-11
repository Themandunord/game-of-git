import { GitHubWebhookEvent, UserIdOrEmailArgs } from '@game-of-git/common';
import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { GitHubWebhookEventCreateInput } from '../../../generated/prisma-client';
import { PrismaService } from '../../../prisma/prisma.service';
import { GitHubWebhookEventType } from './parser/eventModels/EventType.types';
import { WebhookEventsResolver } from './webhooks-events.resolver';
import { WebhooksService } from './webhooks.service';

export interface IWebhookQuery {
    repository: string;
    eventType?: string;
}

// Set the region
AWS.config.update({
    // TODO load credentials instead of local dev tests
    credentials: {
        accessKeyId: 'test',
        secretAccessKey: 'test'
    },

    // TODO: Config load region
    region: 'us-east-1',
    // TODO: Config load endpoint
    dynamodb: {
        endpoint: 'http://localhost:8000'
    }
});

const WEBHOOK_EVENTS_TABLE_NAME = 'WebhookEvents';
const PAGE_SIZE_LIMIT = 10;
@Injectable()
export class WebhooksRepository {
    private dynamoDb: AWS.DynamoDB;
    private dynamoDocumentClient: AWS.DynamoDB.DocumentClient;
    private readonly logger = new Logger('WebhooksRepository');

    public static readonly PageSizeLimit = PAGE_SIZE_LIMIT;
    public static readonly WebhookEventsTableName = WEBHOOK_EVENTS_TABLE_NAME;

    constructor(
        @Inject(forwardRef(() => WebhooksService))
        private readonly webhooksService: WebhooksService,
        private readonly webhookEventsResolver: WebhookEventsResolver,
        private readonly prisma: PrismaService
    ) {
        this.dynamoDb = new AWS.DynamoDB();
        this.dynamoDocumentClient = new AWS.DynamoDB.DocumentClient();
        this.initializeWebhookEventsTable();
    }

    async deleteWebhookEventsTable() {
        return await this.dynamoDb
            .deleteTable({
                TableName: WEBHOOK_EVENTS_TABLE_NAME
            })
            .promise();
    }

    async initializeWebhookEventsTable() {
        const initialTables = await this.dynamoDb.listTables().promise();

        if (
            !initialTables.TableNames.find(x => x === WEBHOOK_EVENTS_TABLE_NAME)
        ) {
            this.logger.log(`Creating ${WEBHOOK_EVENTS_TABLE_NAME} table`);
            const createTableOutput = await this.dynamoDb
                .createTable({
                    TableName: WEBHOOK_EVENTS_TABLE_NAME,
                    KeySchema: [
                        {
                            AttributeName: 'eventKey',
                            KeyType: 'HASH'
                        }
                    ],
                    AttributeDefinitions: [
                        { AttributeName: 'eventKey', AttributeType: 'S' }
                    ],
                    ProvisionedThroughput: {
                        ReadCapacityUnits: 1,
                        WriteCapacityUnits: 1
                    }
                })
                .promise();
        }
    }

    async loadEvent(webhookEventId: string) {
        const webhookEventData = await this.prisma.client.gitHubWebhookEvent({
            id: webhookEventId
        });

        if (!webhookEventData) {
            return webhookEventData;
        }

        const webhookRepository = await this.prisma.client
            .gitHubWebhookEvent({ id: webhookEventId })
            .repository();

        if (!webhookRepository) {
            return webhookEventData;
        }

        const webhookData = await this.loadDynamoData(
            this.repositoryEventKey(
                webhookRepository.id,
                webhookEventData.eventType as GitHubWebhookEventType,
                webhookEventData as any
            )
        );
        const data = {
            ...webhookEventData,
            data: JSON.parse(webhookData.Item.data),
            eventKey: webhookData.Item.eventKey
        };

        const model = await this.webhooksService.validateAndParseWebhookEvent(
            webhookRepository.id,
            data.eventType,
            data
        );
        return model;
    }

    async loadEvents(loadEventsData: {
        repository: string;
        pageSize?: number;
        index?: number;
    }) {
        const repository = loadEventsData.repository;
        const index = loadEventsData.index ? loadEventsData.index : 0;
        const pageSize =
            loadEventsData.pageSize &&
            loadEventsData.pageSize <= PAGE_SIZE_LIMIT
                ? loadEventsData.pageSize
                : PAGE_SIZE_LIMIT;
        console.log(`using page size ${pageSize}`);

        const events = await this.prisma.client.gitHubWebhookEvents({
            where: {
                repository: {
                    name: repository
                }
            },
            skip: index,
            first: pageSize
        });

        return events;
    }

    async loadDynamoData(eventKey: string) {
        const dynamoData = await this.dynamoDocumentClient
            .get({
                TableName: WEBHOOK_EVENTS_TABLE_NAME,
                Key: {
                    eventKey
                }
            })
            .promise();

        return dynamoData;
    }

    async deleteDynamoData(eventKey: string) {
        return await this.dynamoDocumentClient.delete({
            TableName: WEBHOOK_EVENTS_TABLE_NAME,
            Key: {
                eventKey
            }
        });
    }

    async deleteEvent(id: string) {
        const webhook = await this.prisma.client.gitHubWebhookEvent({
            id
        });

        const repository = await this.prisma.client.gitHubWebhookEvent({ id });

        const eventKey = this.repositoryEventKey(
            repository.id,
            webhook.eventType as GitHubWebhookEventType,
            webhook as any
        );

        await this.prisma.client.deleteGitHubWebhookEvent({
            id
        });

        await this.dynamoDocumentClient.delete({
            TableName: WEBHOOK_EVENTS_TABLE_NAME,
            Key: {
                eventKey
            }
        });
    }

    async deleteUsersRepositoriesEvents(userIdOrEmail: UserIdOrEmailArgs) {
        await this.prisma.client.deleteManyGitHubWebhookEvents({
            repository: {
                addedBy: userIdOrEmail
            }
        });
    }

    async storeEvent(
        repository: string,
        eventType: GitHubWebhookEventType,
        webhookEvent: any
    ) {
        // Extract and Validate Event Model
        const model = await this.webhooksService.validateAndParseWebhookEvent(
            repository,
            eventType,
            webhookEvent
        );

        // Fill in blanks with defaults
        const action = webhookEvent.action ? webhookEvent.action : eventType;
        const sender =
            webhookEvent.sender && webhookEvent.sender.login
                ? webhookEvent.sender.login
                : 'UNKNOWN';

        // SQL
        const githubWebhookEventData: GitHubWebhookEventCreateInput = {
            eventType,
            action,
            repository: {
                connect: {
                    id: repository
                }
            },
            sender
        };

        this.logger.log('Creating GitHub Webhook Event in Prisma DB');

        const webhookData = await this.prisma.client.createGitHubWebhookEvent(
            githubWebhookEventData
        );

        // Store raw webhook event data to Dynamo
        const eventKey = this.repositoryEventKey(
            repository,
            eventType,
            webhookData as any
        );

        const params: AWS.DynamoDB.DocumentClient.PutItemInput = {
            TableName: WEBHOOK_EVENTS_TABLE_NAME,
            Item: {
                eventKey,
                data: JSON.stringify(webhookEvent)
            }
        };

        this.logger.log('Insert webhook event to dynamo');

        await this.dynamoDocumentClient.put(params).promise();
        this.logger.log('successfully put it to dynamo');

        // Retrieve it and return it.
        const dynamoRecord = await this.loadDynamoData(eventKey);

        const result = {
            ...webhookData,
            ...dynamoRecord.Item
        };

        return result;
    }

    public repositoryEventKey = (
        repositoryId: string,
        eventType: GitHubWebhookEventType,
        webhookData: GitHubWebhookEvent
    ) => `${repositoryId}-${eventType}-${webhookData.createdAt}`;
}
