import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { MongoMemoryServer } from 'mongodb-memory-server';
import * as path from 'path';
import * as request from 'supertest';
import TestingUtilities from '../../../../utilities/testing';
import { AppKeyModule } from '../app-key/app-key.module';
import { AppKeyService } from '../app-key/app-key.service';
import { GitClientModule } from '../git-client.module';
import { GitClientService } from './../git-client.service';
import { GitHubWebhookEvents } from './parser/eventModels/EventType.constants';
import { GitHubWebhookEventType } from './parser/eventModels/EventType.types';
import { RepositoryWebhookSchema } from './RepositoryWebhook.schema';
import { WebhookEventsResolver } from './webhooks-events.resolver';
import { WebhooksController } from './webhooks.controller';
import { WebhooksModule } from './webhooks.module';

const mockGitClientService = jest.mock('./../git-client.service');
const mockAppKeyService = jest.mock('./../app-key/app-key.service');
// const mockWebhooksRepository = jest.genMockFromModule<WebhooksRepository>('./webhooks.repository');
const mockWebhookEventsResolver = jest.genMockFromModule<WebhookEventsResolver>(
    './webhooks-events.resolver'
);

const GITHUB_WEBHOOK_EVENT_TYPES = Object.keys(
    GitHubWebhookEvents
) as GitHubWebhookEventType[];

const UNSUPPORTRED_EVENT_TYPE = 'wubbalubbadubdub';

/**
 * Validates the Webhook Endpoint Response Body (very naively right now, can be improved upon)
 *
 * @param repositoryId
 * @param eventType
 * @param data
 * @param body
 */
const validateWebhookResponseBody = (
    repositoryId: string,
    eventType: string,
    data: any,
    body: any
) =>
    body &&
    body._id &&
    body.repository === repositoryId &&
    body.eventType === eventType &&
    body.data.toString() === data.toString();

describe('Webhooks Controller', () => {
    let app;

    let mongod: MongoMemoryServer;

    mockWebhookEventsResolver.createWebhookEvent = async (
        args: any,
        info: any
    ) => {
        return {} as any;
    };

    beforeEach(async () => {
        mongod = new MongoMemoryServer();
        const uri = await mongod.getConnectionString();

        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [
                WebhooksModule,
                GitClientModule,
                // GitClientService,
                AppKeyModule,
                // AppKeyService,
                MongooseModule.forFeature([
                    {
                        name: 'RepositoryWebhook',
                        schema: RepositoryWebhookSchema
                    }
                ]),
                MongooseModule.forRoot(uri)
            ],
            // providers: [WebhooksRepository],
            controllers: [WebhooksController]
        })
            .overrideProvider(GitClientService)
            .useValue(mockGitClientService)
            .overrideProvider(AppKeyService)
            .useValue(mockAppKeyService)
            .overrideProvider(WebhookEventsResolver)
            .useValue(mockWebhookEventsResolver)
            // .overrideProvider(WebhooksRepository)
            // .useValue(mockWebhooksRepository)
            .compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    xdescribe('Retrieving all stored events for a repository', () => {});

    describe('Handling Webhook Events for a given Repository', async () => {
        const repoId = 'someId';

        describe('Unsupported Webhook Event Types', () => {
            it(`Should 404 on an unhandled event type ${UNSUPPORTRED_EVENT_TYPE}`, async () =>
                request(app.getHttpServer())
                    .post(`/webhook/${repoId}`)
                    .send({})
                    .set('x-github-event', UNSUPPORTRED_EVENT_TYPE)
                    .expect(404));
        });

        describe('Valid GitHub Events', async () => {
            await Promise.all(
                GITHUB_WEBHOOK_EVENT_TYPES.map(async eventTypeKey => {
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
                            // expectedData = {
                            // 	id: repoId,
                            // 	createdAt: new Date(),
                            // 	eventType: GitHubWebhookEvents[eventTypeKey],
                            // 	action: sampleJson.action,
                            // 	sender: sampleJson.sender ? sampleJson.sender.login : 'unknown'
                            // };
                            // mockWebhooksRepository.store = jest.fn(async () => expectedData);
                        });

                        it('Should store the webhook and respond with a 201', async () => {
                            return request(app.getHttpServer())
                                .post(`/webhook/${repoId}`)
                                .send(sampleJson)
                                .set(
                                    'x-github-event',
                                    GitHubWebhookEvents[eventTypeKey]
                                )
                                .expect(201)
                                .expect(res =>
                                    expect(
                                        validateWebhookResponseBody(
                                            repoId,
                                            GitHubWebhookEvents[eventTypeKey],
                                            sampleJson,
                                            res.body
                                        )
                                    ).toBeTruthy()
                                );
                        });
                    });
                })
            );
        });
    });
});
