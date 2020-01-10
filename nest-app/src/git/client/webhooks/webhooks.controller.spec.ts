import { Test, TestingModule } from '@nestjs/testing';
import * as path from 'path';
import * as request from 'supertest';
import { PrismaService } from '../../../prisma/prisma.service';
import { repositoryFactory } from '../../../repositories/repositories.factory';
import { RepositoriesModule } from '../../../repositories/repositories.module';
import { RepositoriesService } from '../../../repositories/repositories.service';
import TestingUtilities from '../../../utilities/testing';
import { createOrRetrieveAppKey } from '../../../utilities/testing/git.app-key.prisma';
import { createOrRetrieveRepository } from '../../../utilities/testing/git.repository.prisma';
import { createOrRetrieveUser } from '../../../utilities/testing/user.prisma';
import { AppKeyModule } from '../app-key/app-key.module';
import { GitClientModule } from '../git-client.module';
import { GitHubWebhookEvents } from './parser/eventModels/EventType.constants';
import { GitHubWebhookEventType } from './parser/eventModels/EventType.types';
import { WebhookEventsResolver } from './webhooks-events.resolver';
import { WebhooksController } from './webhooks.controller';
import { WebhooksModule } from './webhooks.module';
import { WebhooksService } from './webhooks.service';

const mockGitClientService = jest.mock('./../git-client.service');
const mockAppKeyService = jest.mock('./../app-key/app-key.service');
const mockWebhookEventsResolver = jest.genMockFromModule<WebhookEventsResolver>(
    './webhooks-events.resolver'
);

const GITHUB_WEBHOOK_EVENT_TYPES = Object.keys(
    GitHubWebhookEvents
) as GitHubWebhookEventType[];

const UNSUPPORTRED_EVENT_TYPE = 'wubbalubbadubdub';
const GIT_TESTING_TOKEN = process.env.GIT_TESTING_TOKEN;
const GIT_TESTING_USER = process.env.GIT_TESTING_USER;
const GIT_TESTING_REPOSITORY = process.env.GIT_TESTING_REPOSITORY;
const GIT_TESTING_USER_EMAIL = process.env.GIT_TESTING_USER_EMAIL;

describe('Webhooks Controller', () => {
    let app;
    let prisma: PrismaService;
    let repositoriesService: RepositoriesService;
    let webhooksService: WebhooksService;

    let user;
    let repo;
    let appKey;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [
                WebhooksModule,
                GitClientModule,
                AppKeyModule,
                RepositoriesModule
            ],
            controllers: [WebhooksController]
        })
            // .overrideProvider(GitClientService)
            // .useValue(mockGitClientService)
            // .overrideProvider(AppKeyService)
            // .useValue(mockAppKeyService)
            // .overrideProvider(WebhookEventsResolver)
            // .useValue(mockWebhookEventsResolver)
            .compile();

        app = moduleFixture.createNestApplication();
        repositoriesService = moduleFixture.get<RepositoriesService>(
            RepositoriesService
        );
        webhooksService = moduleFixture.get<WebhooksService>(WebhooksService);
        prisma = moduleFixture.get<PrismaService>(PrismaService);
        await app.init();

        user = await createOrRetrieveUser(prisma, {
            gitLogin: GIT_TESTING_USER,
            email: GIT_TESTING_USER_EMAIL
        });
        appKey = await createOrRetrieveAppKey(prisma, {
            key: GIT_TESTING_TOKEN,
            name: 'webhooksController',
            user: {
                email: user.email
            }
        });
        repo = await createOrRetrieveRepository(
            prisma,
            user,
            appKey,
            repositoryFactory({
                name: GIT_TESTING_REPOSITORY,
                idExternal: 'someIdExternal'
            })
        );
    });

    xdescribe('Retrieving all stored events for a repository', () => {});

    describe('Handling Webhook Events for a given Repository', () => {
        describe('Unsupported Webhook Event Types', () => {
            it(`Should 404 on an unhandled event type ${UNSUPPORTRED_EVENT_TYPE}`, async () =>
                request(app.getHttpServer())
                    .post(`/webhook/${GIT_TESTING_REPOSITORY}`)
                    .send({})
                    .set('x-github-event', UNSUPPORTRED_EVENT_TYPE)
                    .expect(404));
        });

        describe('Valid GitHub Events', () => {
            // GITHUB_WEBHOOK_EVENT_TYPES.map(eventTypeKey => {
            ['CheckRun'].map(async eventTypeKey => {
                describe(`${eventTypeKey}`, () => {
                    const eventType = GitHubWebhookEvents[eventTypeKey];

                    let sampleJson: any;
                    let expectedData;

                    beforeAll(async () => {
                        sampleJson = await TestingUtilities.loadJson(
                            path.join(
                                __dirname,
                                `parser/eventModels/${eventType}/sample.json`
                            )
                        );

                        // expectedData = {
                        // 	id: GIT_TESTING_REPOSITORY,
                        // 	createdAt: new Date(),
                        // 	eventType: GitHubWebhookEvents[eventTypeKey],
                        // 	action: sampleJson.action,
                        // 	sender: sampleJson.sender ? sampleJson.sender.login : 'unknown'
                        // };
                        // mockWebhooksRepository.store = jest.fn(async () => expectedData);
                    });

                    it('Should store the webhook and respond with a 201', async () => {
                        console.log(`GIT_TESTING_REPOSITORY = ${repo.id}`);
                        const originalWebhooks = await webhooksService.getAll(
                            repo,
                            GIT_TESTING_USER_EMAIL
                        );
                        return request(app.getHttpServer())
                            .post(`/webhook/${repo.id}`)
                            .send(sampleJson)
                            .set(
                                'x-github-event',
                                GitHubWebhookEvents[eventTypeKey]
                            )
                            .expect(201)
                            .expect(res => expect(res.body).toStrictEqual({}))
                            .expect(async () => {
                                const webhooks = await webhooksService.getAll(
                                    repo,
                                    GIT_TESTING_USER_EMAIL
                                );
                                return expect(webhooks.length).toEqual(
                                    originalWebhooks.length + 1
                                );
                            });
                    });
                });
            });
        });
    });
});
