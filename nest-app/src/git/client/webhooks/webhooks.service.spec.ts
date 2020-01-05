import { CommandBus, CqrsModule } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';
import * as path from 'path';
import { GitHubWebhookEvent } from '../../../generated/prisma-client';
import { PrismaModule } from '../../../prisma/prisma.module';
import { MockCommandBus } from '../../../utilities/MockCommandBus';
import TestingUtilities from '../../../utilities/testing';
import { AppKeyModule } from '../app-key/app-key.module';
import { AppKeyService } from '../app-key/app-key.service';
import { GitClientModule } from '../git-client.module';
import { GitClientService } from '../git-client.service';
import { HandleWebhookCommand } from './commands/handle-webhook.command';
import { HandleWebhookHandler } from './commands/handle-webhook.handler';
import { GitHubWebhookEventInput } from './GitHubWebhookEvent.input';
import { GitHubWebhookEvents } from './parser/eventModels/EventType.constants';
import { GitHubWebhookEventType } from './parser/eventModels/EventType.types';
import { ParserService } from './parser/parser.service';
import { WebhookEventsResolver } from './webhooks-events.resolver';
import { WebhooksRepository } from './webhooks.repository';
import { WebhooksService } from './webhooks.service';
import ps from '../../../pubsub';
import { PubSubEngine } from 'type-graphql';
import { PrismaService } from '../../../prisma/prisma.service';
import {
    clearAppKey,
    clearUserAppKeys,
    createOrRetrieveAppKey
} from '../../../utilities/testing/git.app-key.prisma';
import {
    clearUser,
    createOrRetrieveUser
} from '../../../utilities/testing/user.prisma';
import {
    clearRepository,
    createOrRetrieveRepository
} from '../../../utilities/testing/git.repository.prisma';
import { clearTestData } from '../../../utilities/testing/teardown';

const mockGitClientService = jest.mock('./../git-client.service');
const mockAppKeyService = jest.mock('./../app-key/app-key.service');
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

describe('WebhooksService', () => {
    let service: WebhooksService;
    let mockCommandBus: MockCommandBus;
    let prisma: PrismaService;
    let user;
    let userWithoutAppKeys;
    let appKey;
    let repository;

    beforeAll(async () => {
        mockCommandBus = new MockCommandBus();

        mockWebhookEventsResolver.create = async (
            gitHubWebhookEventInput: GitHubWebhookEventInput
        ) => {
            return {} as GitHubWebhookEvent;
        };

        const module: TestingModule = await Test.createTestingModule({
            imports: [GitClientModule, AppKeyModule, CqrsModule, PrismaModule],
            providers: [
                WebhooksRepository,
                WebhooksService,
                GitClientService,
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
            .overrideProvider(GitClientService)
            .useValue(mockGitClientService)
            .overrideProvider(AppKeyService)
            .useValue(mockAppKeyService)
            .overrideProvider(WebhookEventsResolver)
            .useValue(mockWebhookEventsResolver)
            .compile();

        service = module.get<WebhooksService>(WebhooksService);
        prisma = module.get<PrismaService>(PrismaService);

        // create or retrieve user, appKey, and repository?
        user = await createOrRetrieveUser(prisma);
        appKey = await createOrRetrieveAppKey(prisma, {
            key: TEST_APP_KEY,
            user: {
                email: user.email
            }
        });
        repository = await createOrRetrieveRepository(prisma, user, appKey, {
            name: REPOSITORY,
            idExternal: 'someIdExternal',
            createdAtExternal: new Date().toISOString(),
            updatedAtExternal: new Date().toISOString(),
            description: '',
            homepageUrl: '',
            url: '',
            owner: '',
            isTracked: false,
            isFork: false,
            isLocked: false,
            isPrivate: false,
            isArchived: false,
            isDisabled: false
        });
    });

    afterAll(async () => {
        await clearTestData(prisma, { email: user.email });
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    xdescribe('Repository Webhook Retrieval', () => {});

    xdescribe('Repository Webhook Creation', () => {});

    xdescribe('Repository Webhook Deletion', () => {});

    xdescribe("Retrieving a Repository's locally stored events", () => {});

    xdescribe("Retrieving a Repository's local stored event count", () => {});

    describe('Inbound Webhook Handling', () => {
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
