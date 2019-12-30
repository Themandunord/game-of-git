import { Repository } from '@game-of-git/common';
import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import axios from 'axios';
import { PubSubEngine } from 'type-graphql';
import { PrismaService } from '../../../prisma/prisma.service';
import config from '../../config';
import { GitClientService } from '../git-client.service';
import { HandleWebhookCommand } from './commands/handle-webhook.command';
import { GitHubWebhookEventType } from './parser/eventModels/EventType.types';
import { ParserService } from './parser/parser.service';
import { WebhooksRepository } from './webhooks.repository';

@Injectable()
export class WebhooksService {
    private readonly logger = new Logger('WebhooksService');
    constructor(
        @Inject(forwardRef(() => GitClientService))
        private readonly gitClientService: GitClientService,

        private readonly commandBus: CommandBus,
        private readonly prisma: PrismaService,
        @Inject(forwardRef(() => WebhooksRepository))
        private readonly webhooksRepository: WebhooksRepository,
        private readonly parserService: ParserService,
        @Inject('PUB_SUB') private pubSub: PubSubEngine
    ) {}

    /**
     * Initialize required webhooks on a Repository via the GitHub Webhook API
     *
     * Once complete, the app should start receiving webhooks from GitHub. Initially a PING event.
     *
     * @param repository
     * @param user
     */
    async initializeWebhooks(repository: Repository, email: string) {
        this.logger.log(
            `Initializing Repository webhooks ${repository.owner} - ${repository.name} on behalf of ${email}`
        );

        const appKey = await this.gitClientService.appKey.getByUserIdOrEmail({
            email
        });

        // TODO: Handle if there is no app key

        // create the webhook
        const result = await this.initialize(appKey.key, repository);
        // tslint:disable-next-line:no-console
        console.log('result from webhook creation: ', result);
        // TODO: Error handling
    }

    /**
     * Destroy all Game of Git Webhooks of a Repository using the GitHub Webhooks API
     *
     * Once complete the app should receive a webhook event for the deletion/unregistration of the webhook
     *
     * @param repository
     * @param user
     */
    async destroyWebhooks(repository: Repository, userEmail: string) {
        this.logger.log(
            `Destroying Repository webhooks ${repository.owner} - ${repository.name} on behalf of ${userEmail}`
        );

        // check for existing webhooks for this repo, if they exist alreday we'll need to either update or delete them.
        // Implementation, TBD!
        const existingWebhooks = await this.getAll(repository, userEmail);
        this.logger.log(
            `There are ${existingWebhooks.length} existing webhooks in this repository`
        );

        const appKey = await this.gitClientService.appKey.getByUserIdOrEmail({
            email: userEmail
        });

        await this.destroy(appKey.key, repository, existingWebhooks[0].id);
    }

    /**
     * Uses the GitHub Webhook API to Retrieve a list of Webhooks currently configured on a repositories
     * @param repoId
     */
    async getAll(repository: Repository, userEmail: string) {
        this.logger.log(
            `listing webhooks currently configured on the repository for user ${userEmail} and repo ${repository.name}`
        );

        const appKey = await this.gitClientService.appKey.getByUserIdOrEmail({
            email: userEmail
        });

        const route = `${config.GITHUB_REST_URL}repos/${repository.owner}/${repository.name}/hooks`;
        this.logger.log(`requesting ${route} with ${appKey.key}`);

        try {
            const result = await axios.get(route, {
                headers: {
                    Authorization: `Bearer ${appKey.key}`
                }
            });

            return result.data;
        } catch (e) {
            this.logger.error('Error Querying for the users webhooks: ' + e);
        }
    }

    /**
     * Uses the GitHub Webhook API to initialize/create a new Webhook
     *
     * @param owner
     * @param repository
     */
    async initialize(key: string, repository: Repository) {
        this.logger.log(
            `Creating a webhook for ${repository.owner}'s repository ${repository.name}`
        );
        this.logger.log(
            `GIT_SERVICE_DOMAIN is ${process.env.GIT_SERVICE_DOMAIN}`
        );
        // throw new Error(`Net yet configured`);
        const route = `${config.GITHUB_REST_URL}repos/${repository.owner}/${repository.name}/hooks`;
        const url = `${process.env.GIT_SERVICE_DOMAIN}/webhook/${repository.id}`;

        this.logger.log(`requesting from ${route} webhook url = ${url}`);

        const CREATE_WEBHOOK_PAYLOAD = {
            name: 'web',
            active: true,
            events: ['*'],
            config: {
                url,
                content_type: 'json',
                insecure_ssl: '0'
            }
        };

        try {
            const result = await axios.post(route, CREATE_WEBHOOK_PAYLOAD, {
                headers: {
                    Authorization: `Bearer ${key}`
                }
            });

            return result.data;
        } catch (e) {
            this.logger.error(
                'Error Creating the webhook for the users webhooks: ' + e
            );
            return null;
        }
    }

    /**
     * Delete a given webhook via the GitHub Webhooks API
     *
     * @param key
     * @param repository
     * @param webhookId
     */
    async destroy(key: string, repository: Repository, webhookId: number) {
        this.logger.log(
            `Deleting a webhook ${webhookId} for ${repository.owner}'s repository ${repository.name}`
        );
        const route = `${config.GITHUB_REST_URL}repos/${repository.owner}/${repository.name}/hooks/${webhookId}`;

        try {
            const result = await axios.delete(route, {
                headers: {
                    Authorization: `Bearer ${key}`
                }
            });

            return result.data;
        } catch (e) {
            this.logger.error(
                'Error Deleting the webhook for the users webhooks: ' + e
            );
        }
    }

    /**
     * Handles receiving a GitHub Webhook Event, finding and calling the appropriate handler class
     * or logging an error of there was no corresponding class for the `eventType
     *
     *
     * @param repository
     * @param eventType
     * @param webhookEvent
     */
    public async handleEvent(
        repository: string,
        eventType: GitHubWebhookEventType,
        webhookEvent: any
    ) {
        // TODO: validate that repository is tracked.
        // TODO: validate the event came from GitHub

        this.logger.log(
            `Storing (${eventType}) Event for repository ${repository} ${Date.now()}`
        );
        const event = await this.webhooksRepository.storeEvent(
            repository,
            eventType,
            webhookEvent
        );
        this.logger.log(
            `Initializing HandleWebhookCommand for webhook id ${event.id}`
        );

        const command = new HandleWebhookCommand(event.id, repository);
        // passively execute the command
        this.logger.log(`Executing the Handle Webhook Command`);
        await this.commandBus.execute(command);
        return event;
    }

    public async validateAndParseWebhookEvent(
        repository,
        eventType,
        webhookEvent
    ) {
        let model;
        try {
            // model = await this.parseWebhookEventModel(repository, eventType, webhookEvent);
            model = await this.parserService.getWebhookEventHandlerInstance(
                repository,
                eventType,
                webhookEvent
            );
        } catch (e) {
            this.logger.error(
                `There was an error making the Model ${eventType} ${repository}`
            );
            console.error(e);
            throw e;
        }
        return model;
    }
}
