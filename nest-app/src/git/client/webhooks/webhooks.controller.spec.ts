import { Test, TestingModule } from '@nestjs/testing';
import * as path from 'path';
import * as request from 'supertest';

import TestingUtilities from '../../../utilities/testing';
import { GitHubWebhookEvents } from './parser/eventModels/EventType.constants';
import { GitHubWebhookEventType } from './parser/eventModels/EventType.types';
import { WebhookEventsResolver } from './webhooks-events.resolver';
import { WebhooksController } from './webhooks.controller';
import { WebhooksModule } from './webhooks.module';
import { WebhooksService } from './webhooks.service';

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

    let webhooksService: WebhooksService;

    let user;
    let repo;
    let apiKey;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [WebhooksModule],
            controllers: [WebhooksController]
        }).compile();

        app = moduleFixture.createNestApplication();
        // webhooksService = moduleFixture.get<WebhooksService>(WebhooksService);
        await app.init();

        // user = await createOrRetrieveUser(prisma, {
        //     gitLogin: GIT_TESTING_USER,
        //     email: GIT_TESTING_USER_EMAIL,
        //     name: 'WebhooksControllerTestUser'
        // });
        // appKey = await createOrRetrieveAppKey(prisma, {
        //     key: GIT_TESTING_TOKEN,
        //     name: 'webhooksControllerTestAppKey',
        //     user: {
        //         email: user.email
        //     }
        // });
        // repo = await createOrRetrieveRepository(
        //     prisma,
        //     user,
        //     appKey,
        //     repositoryFactory({
        //         name: GIT_TESTING_REPOSITORY + 'webhooksController',
        //         idExternal: 'someIdExternalWebhooksController'
        //     })
        // );
    });

    afterEach(async () => {
        // await clearTestData(prisma, { id: user.id });
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
            GITHUB_WEBHOOK_EVENT_TYPES.map(eventTypeKey => {
                // ['CheckRun'].map(async eventTypeKey => {
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
                    });

                    it('Should store the webhook and respond with a 201', async () => {
                        const originalWebhooks = await webhooksService.getAll(
                            repo,
                            GIT_TESTING_USER_EMAIL
                        );
                        return await request(app.getHttpServer())
                            .post(`/webhook/${repo.id}`)
                            .send(sampleJson)
                            .set(
                                'x-github-event',
                                GitHubWebhookEvents[eventTypeKey]
                            )
                            .expect(201)
                            .expect(res => expect(res.body).toStrictEqual({}));
                    });
                });
            });
        });
    });
});
