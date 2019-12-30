import { GitHubWebhookEvent } from '@game-of-git/common';
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

@Injectable()
export class WebhooksRepository {
    private dynamoDb: AWS.DynamoDB;
    private dynamoDocumentClient: AWS.DynamoDB.DocumentClient;
    private readonly logger = new Logger('WebhooksRepository');

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
        const webhookRepository = await this.prisma.client
            .gitHubWebhookEvent({ id: webhookEventId })
            .repository();

        const webhookData = await this.loadEventData(
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

    async loadEventData(eventKey: string) {
        return await this.dynamoDocumentClient
            .get({
                TableName: WEBHOOK_EVENTS_TABLE_NAME,
                Key: {
                    eventKey
                }
            })
            .promise();
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
        const dynamoRecord = await this.loadEventData(eventKey);

        const result = {
            ...webhookData,
            ...dynamoRecord.Item
        };

        return result;
    }

    private repositoryEventKey = (
        repositoryId: string,
        eventType: GitHubWebhookEventType,
        webhookData: GitHubWebhookEvent
    ) => `${repositoryId}-${eventType}-${webhookData.createdAt}`;
}
