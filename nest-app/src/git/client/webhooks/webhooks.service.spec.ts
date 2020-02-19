import { CommandBus, CqrsModule } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';
import * as path from 'path';
import { PubSubEngine } from 'type-graphql';

import { MockCommandBus } from '../../../utilities/MockCommandBus';
import TestingUtilities from '../../../utilities/testing';
import { HandleWebhookCommand } from './commands/handle-webhook.command';
import { HandleWebhookHandler } from './commands/handle-webhook.handler';
import { GitHubWebhookEventInput } from './GitHubWebhookEvent.input';
import { GitHubWebhookEvents } from './parser/eventModels/EventType.constants';
import { GitHubWebhookEventType } from './parser/eventModels/EventType.types';
import { ParserService } from './parser/parser.service';
import { WebhookEventsResolver } from './webhooks-events.resolver';
import { WebhooksRepository } from './webhooks.repository';
import { WebhooksService } from './webhooks.service';

const mockWebhookEventsResolver = jest.genMockFromModule<WebhookEventsResolver>(
    './webhooks-events.resolver'
);

const GITHUB_WEBHOOK_EVENT_TYPES = Object.keys(
    GitHubWebhookEvents
) as GitHubWebhookEventType[];

const REPOSITORY = process.env.GIT_TESTING_REPOSITORY;
const psMock = (jest.genMockFromModule<jest.Mocked<PubSubEngine>>(
    '../../../pubsub'
) as any).default as jest.Mocked<PubSubEngine>;

const TEST_APP_KEY = 'asdfffdsaasdfasdf';

describe.skip('WebhooksService', () => {
    let service: WebhooksService;
    let mockCommandBus: MockCommandBus;
    let user;
    let userWithoutApiKeys;
    let apiKey;
    let repository;

    beforeAll(async () => {
        mockCommandBus = new MockCommandBus();

        // mockWebhookEventsResolver.create = async (
        //     gitHubWebhookEventInput: GitHubWebhookEventInput
        // ) => {
        //     return {} as GitHubWebhookEvent;
        // };

        const module: TestingModule = await Test.createTestingModule({
            imports: [CqrsModule],
            providers: [
                WebhooksRepository,
                WebhooksService,
                ParserService,
                HandleWebhookHandler,
                WebhookEventsResolver,
                {
                    provide: 'PUB_SUB',
                    useValue: psMock
                }
            ]
        })
            .overrideProvider(CommandBus)
            .useValue(mockCommandBus)
            .compile();

        service = module.get<WebhooksService>(WebhooksService);

        // create or retrieve user, appKey, and repository?
        // user = await createOrRetrieveUser(prisma, {
        //     email: 'someTestEmailForWebhooksService123@gmail.com',
        //     name: 'someTestUserForWebhooksService123'
        // });
        // appKey = await createOrRetrieveAppKey(prisma, {
        //     key: TEST_APP_KEY + 'webhooksServiceAppKey123',
        //     user: {
        //         email: user.email
        //     }
        // });
        // repository = await createOrRetrieveRepository(prisma, user, appKey, {
        //     name: REPOSITORY + 'webhooksServiceTest123',
        //     idExternal: 'someIdExternalWebhooksServiceTest123',
        //     createdAtExternal: new Date().toISOString(),
        //     updatedAtExternal: new Date().toISOString(),
        //     description: '',
        //     homepageUrl: '',
        //     url: '',
        //     owner: '',
        //     isTracked: true,
        //     isFork: false,
        //     isLocked: false,
        //     isPrivate: false,
        //     isArchived: false,
        //     isDisabled: false
        // });
    });

    afterAll(async () => {
        try {
            // await clearTestData(prisma, {
            //     email: user.email
            // });
        } catch (e) {
            console.error('ERROR CLEARING DATA FOR WEBHOOKS SERVICE', e);
        }
        console.log('Webhooks Service cleared user data for ', user);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    xdescribe('Inbound Webhook Handling', () => {
        // for each event type suported...
        GITHUB_WEBHOOK_EVENT_TYPES.map(eventTypeKey => {
            // ['CheckRun'].map(async eventTypeKey => {
            describe(`${eventTypeKey}`, () => {
                const eventType = GitHubWebhookEvents[eventTypeKey];

                let sampleJson: any;

                beforeAll(async () => {
                    sampleJson = await TestingUtilities.loadJson(
                        path.join(
                            __dirname,
                            `parser/eventModels/${eventType}/sample.json`
                        )
                    );
                });

                beforeEach(() => {
                    jest.resetAllMocks();
                });

                it('Should dispatch a HandleWebhookCommand with the webhook event id', async () => {
                    mockCommandBus.execute = jest.fn(async val => {
                        return expect(val).toBeInstanceOf(HandleWebhookCommand);
                    });

                    await service.handleEvent(
                        repository.id,
                        eventType,
                        sampleJson
                    );

                    expect(mockCommandBus.execute).toBeCalledTimes(1);
                });
            });
        });
    });
});
