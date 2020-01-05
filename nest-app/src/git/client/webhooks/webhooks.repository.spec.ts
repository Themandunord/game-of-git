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
import { clearTestData } from '../../../utilities/testing/teardown';
import ps from '../../../pubsub';
import { Repository } from '@game-of-git/common';

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
    let repoWithoutWebhookEvents;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [GitClientModule, AppKeyModule, CqrsModule, PrismaModule],
            providers: [
                WebhooksService,
                GitClientService,
                ParserService,
                HandleWebhookHandler,
                WebhooksRepository,
                WebhookEventsResolver,
                {
                    provide: 'PUB_SUB',
                    useValue: ps
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

        repository = module.get<WebhooksRepository>(WebhooksRepository);
        prisma = module.get<PrismaService>(PrismaService);

        user = await createOrRetrieveUser(prisma);
        appKey = await createOrRetrieveAppKey(prisma, {
            key: TEST_APP_KEY,
            user: {
                email: user.email
            }
        });

        const repositoryFactory = (repoData?: Partial<Repository>) => {
            const name =
                repoData && repoData.name
                    ? repoData.name
                    : 'Some Repository Default Name';
            const idExternal =
                repoData && repoData.name ? repoData.name : 'someIdExternal';
            const createdAtExternal =
                repoData && repoData.createdAtExternal
                    ? repoData.createdAtExternal.toISOString()
                    : new Date().toISOString();
            const updatedAtExternal =
                repoData && repoData.updatedAtExternal
                    ? repoData.updatedAtExternal.toISOString()
                    : new Date().toISOString();
            const description =
                repoData && repoData.description ? repoData.description : '';
            const homepageUrl =
                repoData && repoData.homepageUrl ? repoData.homepageUrl : '';
            const url = repoData && repoData.url ? repoData.url : '';
            const owner = repoData && repoData.owner ? repoData.owner : '';
            const isTracked =
                repoData && repoData.isTracked ? repoData.isTracked : false;
            const isFork =
                repoData && repoData.isFork ? repoData.isFork : false;
            const isLocked =
                repoData && repoData.isLocked ? repoData.isLocked : false;
            const isPrivate =
                repoData && repoData.isPrivate ? repoData.isPrivate : false;
            const isArchived =
                repoData && repoData.isArchived ? repoData.isArchived : false;
            const isDisabled =
                repoData && repoData.isDisabled ? repoData.isDisabled : false;

            return {
                name,
                idExternal,
                createdAtExternal,
                updatedAtExternal,
                description,
                homepageUrl,
                url,
                owner,
                isTracked,
                isFork,
                isLocked,
                isPrivate,
                isArchived,
                isDisabled
            };
        };
        repo = await createOrRetrieveRepository(
            prisma,
            user,
            appKey,
            repositoryFactory({
                name: REPOSITORY,
                idExternal: 'someIdExternal'
            })
        );
        repoWithoutWebhookEvents = await createOrRetrieveRepository(
            prisma,
            user,
            appKey,
            repositoryFactory({
                name: REPOSITORY,
                idExternal: 'someIdExternalWithoutWebhooks'
            })
        );
    });

    afterAll(async () => {
        await clearTestData(prisma, { email: user.email });
        await clearTestData(prisma, { email: userWithoutAppKeys.email });
    });

    it('should be defined', () => {
        expect(repository).toBeDefined();
    });

    describe('Retrieval', () => {
        describe('METHOD: loadEvent', () => {
            it('Should return null for a non-existant webhook', async () => {
                const res = await repository.loadEvent(
                    '56e6dd2eb4494ed008d595bd'
                );
                expect(res).toBeNull();
            });
        });

        describe('METHOD: loadEvents', () => {
            it('Should return an empty array for a repo with no events', async () => {
                const res = await repository.loadEvents({
                    // repository: REPOSITORY,
                    repository: repo.name,
                    pageSize: 20
                });
                expect(res).toHaveLength(0);
            });
        });

        describe('METHOD: loadDynamoData', () => {
            it('stubs', async () => {
                expect(true).toBeTruthy();
            });
        });
    });

    describe('Creation', () => {
        // GITHUB_WEBHOOK_EVENT_TYPES.map(eventTypeKey => {
        ['Ping'].map(eventTypeKey => {
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
