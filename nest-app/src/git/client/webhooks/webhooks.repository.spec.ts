import { CommandBus, CqrsModule } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';
import * as path from 'path';
import { PrismaModule } from '../../../prisma/prisma.module';
import { PrismaService } from '../../../prisma/prisma.service';
import { MockCommandBus } from '../../../utilities/MockCommandBus';
import TestingUtilities from '../../../utilities/testing';
import {
    clearAppKey,
    clearUserAppKeys,
    createOrRetrieveAppKey
} from '../../../utilities/testing/git.app-key.prisma';
import {
    clearRepository,
    createOrRetrieveRepository
} from '../../../utilities/testing/git.repository.prisma';
import {
    clearUser,
    createOrRetrieveUser
} from '../../../utilities/testing/user.prisma';
import { AppKeyModule } from '../app-key/app-key.module';
import { AppKeyService } from '../app-key/app-key.service';
import { GitClientModule } from '../git-client.module';
import { GitClientService } from '../git-client.service';
import { HandleWebhookHandler } from './commands/handle-webhook.handler';
import { GitHubWebhookEvents } from './parser/eventModels/EventType.constants';
import { GitHubWebhookEventType } from './parser/eventModels/EventType.types';
import { ParserService } from './parser/parser.service';
import { WebhookEventsResolver } from './webhooks-events.resolver';
import { WebhooksRepository } from './webhooks.repository';
import { WebhooksService } from './webhooks.service';

const mockGitClientService = jest.mock('./../git-client.service');
const mockAppKeyService = jest.mock('./../app-key/app-key.service');
const mockWebhooksService = jest.mock('./webhooks.service');
const mockWebhookEventsResolver = jest.genMockFromModule<WebhookEventsResolver>(
    './webhooks-events.resolver'
);

const OWNER = process.env.GIT_TESTING_USER;
const REPOSITORY = process.env.GIT_TESTING_REPOSITORY;

const GITHUB_WEBHOOK_EVENT_TYPES = Object.keys(
    GitHubWebhookEvents
) as GitHubWebhookEventType[];

const TEST_APP_KEY = 'asdfasgmgmgkgkgkgilweuhflskjfdng;adnvicky';

describe('Webhooks Repository', () => {
    let repository: WebhooksRepository;
    let prisma: PrismaService;
    const mockCommandBus = new MockCommandBus();

    let user;
    let userWithoutAppKeys;
    let appKey;
    let repo;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [GitClientModule, AppKeyModule, CqrsModule, PrismaModule],
            providers: [
                WebhooksService,
                GitClientService,
                ParserService,
                HandleWebhookHandler
            ]
        })
            .overrideProvider(CommandBus)
            .useValue(mockCommandBus)
            .overrideProvider(WebhooksService)
            .useValue(mockWebhooksService)
            .overrideProvider(GitClientService)
            .useValue(mockGitClientService)
            .overrideProvider(AppKeyService)
            .useValue(mockAppKeyService)
            .overrideProvider(WebhookEventsResolver)
            .useValue(mockWebhookEventsResolver)
            .compile();

        repository = module.get<WebhooksRepository>(WebhooksRepository);
        prisma = module.get<PrismaService>(PrismaService);

        user = await createOrRetrieveUser(prisma);
        appKey = await createOrRetrieveAppKey(prisma, {
            key: TEST_APP_KEY,
            user: {
                email: user.email
            }
        });
        repo = await createOrRetrieveRepository(prisma, user, appKey, {
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
        await clearAppKey(prisma, { id: appKey.id });
        await clearUserAppKeys(prisma, { email: user.email });
        await clearUser(prisma, { id: user.id });
        await clearUser(prisma, { id: userWithoutAppKeys.id });
        await clearRepository(prisma, repo.name);
    });

    it('should be defined', () => {
        expect(repository).toBeDefined();
    });

    describe('Retrieval', () => {
        it('Should return null for a non-existant webhook', async () => {
            // const res = await repository.getById('56e6dd2eb4494ed008d595bd');
            // expect(res).toBeNull();
        });

        it('Should return an empty array for a repo with no events', async () => {
            // const res = await repository.getAll({
            //     repository: REPOSITORY
            // });
            // expect(res).toHaveLength(0);
        });
    });

    describe('Creation', () => {
        GITHUB_WEBHOOK_EVENT_TYPES.map(eventTypeKey => {
            const eventType = GitHubWebhookEvents[eventTypeKey];

            describe(`${eventType}`, () => {
                let data;
                let stringifiedData;
                let result;
                beforeAll(async () => {
                    data = await TestingUtilities.loadJson(
                        path.join(
                            __dirname,
                            `parser/eventModels/${eventType}/sample.json`
                        )
                    );
                    stringifiedData = data.toString();
                    result = await repository.storeEvent(
                        repo.id,
                        eventType,
                        data
                    );
                });

                it(`Should be able to store a ${eventType} webhook`, async () => {
                    // expect(result).not.toBeNull();
                    // expect(result._id).toBeInstanceOf(ObjectID);
                    // expect(result.repository).toEqual(REPOSITORY);
                    // expect(result.eventType).toEqual(eventType);
                    // expect(result.data.toString()).toEqual(stringifiedData);
                });

                it(`Should be able to retrieve the created ${eventType} webhook by id`, async () => {
                    // const retrieved = await repository.getById(result._id);
                    // expect(retrieved.repository).toEqual(REPOSITORY);
                    // expect(retrieved.eventType).toEqual(eventType);
                    // expect(retrieved.data.toString()).toEqual(
                    //     stringifiedData
                    // );
                });

                it(`Should be able to retrieve the created ${eventType} webhook by in the get all query for this repository`, async () => {
                    // const retrieved = await repository.getAll({
                    //     repository: REPOSITORY,
                    //     eventType
                    // });
                    // expect(retrieved).toHaveLength(1);
                    // expect(retrieved[0].repository).toEqual(REPOSITORY);
                    // expect(retrieved[0].eventType).toEqual(eventType);
                    // expect(retrieved[0].data.toString()).toEqual(
                    //     stringifiedData
                    // );
                });
            });
        });
    });
});
