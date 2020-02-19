import { CommandBus, CqrsModule } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';
import * as path from 'path';

import ps from '../../../pubsub';
import { MockCommandBus } from '../../../utilities/MockCommandBus';
import TestingUtilities from '../../../utilities/testing';
import { HandleWebhookHandler } from './commands/handle-webhook.handler';
import { GitHubWebhookEvents } from './parser/eventModels/EventType.constants';
import { GitHubWebhookEventType } from './parser/eventModels/EventType.types';
import { ParserService } from './parser/parser.service';
import { WebhookEventsResolver } from './webhooks-events.resolver';
import { WebhooksRepository } from './webhooks.repository';
import { WebhooksService } from './webhooks.service';

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

const loadJsonSampleDataFromEventType = async (
    eventType: GitHubWebhookEventType
) =>
    TestingUtilities.loadJson(
        path.join(__dirname, `parser/eventModels/${eventType}/sample.json`)
    );

const seedWebhook = async (
    repository: WebhooksRepository,
    repoId: string,
    eventType: GitHubWebhookEventType
) => {
    const webhookEventData = await loadJsonSampleDataFromEventType(eventType);
    return await repository.storeEvent(repoId, eventType, webhookEventData);
};

describe('Webhooks Repository', () => {
    let repository: WebhooksRepository;
    const mockCommandBus = new MockCommandBus();

    let user;
    let userWithoutApiKeys;
    let apiKey;
    let repo;
    let repoWithoutWebhookEvents;
    let repoWithManyWebhookEvents;
    let webhookEvent;
    let manyWebhookEvents;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [CqrsModule],
            providers: [
                WebhooksService,
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
            .overrideProvider(WebhookEventsResolver)
            .useValue(mockWebhookEventsResolver)
            .compile();

        repository = module.get<WebhooksRepository>(WebhooksRepository);

        // user = await createOrRetrieveUser(prisma);
        // appKey = await createOrRetrieveAppKey(prisma, {
        //     key: TEST_APP_KEY,
        //     user: {
        //         email: user.email
        //     }
        // });

        // repo = await createOrRetrieveRepository(
        //     prisma,
        //     user,
        //     appKey,
        //     repositoryFactory({
        //         name: REPOSITORY,
        //         idExternal: 'someIdExternalWebhooksRepository'
        //     })
        // );

        // // store a sample webhook event

        // webhookEvent = await seedWebhook(
        //     repository,
        //     repo.id,
        //     GitHubWebhookEvents.Ping
        // );

        // repoWithoutWebhookEvents = await createOrRetrieveRepository(
        //     prisma,
        //     user,
        //     appKey,
        //     repositoryFactory({
        //         name: REPOSITORY + 'withoutWebhooks',
        //         idExternal: 'someIdExternalWithoutWebhooks'
        //     })
        // );

        // repoWithManyWebhookEvents = await createOrRetrieveRepository(
        //     prisma,
        //     user,
        //     appKey,
        //     repositoryFactory({
        //         name: REPOSITORY + 'withManyWebhooks',
        //         idExternal: 'someIdExternalWithManyWebhooks'
        //     })
        // );

        const manyEvents = [
            GitHubWebhookEvents.CheckRun,
            GitHubWebhookEvents.CheckSuite,
            GitHubWebhookEvents.CommitComment,
            GitHubWebhookEvents.ContentReference,
            GitHubWebhookEvents.Create,
            GitHubWebhookEvents.Delete,
            GitHubWebhookEvents.Fork,
            GitHubWebhookEvents.Gollum,
            GitHubWebhookEvents.IssueComment,
            GitHubWebhookEvents.Issues,
            GitHubWebhookEvents.Label,
            GitHubWebhookEvents.Member,
            GitHubWebhookEvents.Meta,
            GitHubWebhookEvents.Milestone,
            GitHubWebhookEvents.PageBuild,
            GitHubWebhookEvents.Project,
            GitHubWebhookEvents.Public,
            GitHubWebhookEvents.PullRequest,
            GitHubWebhookEvents.PullRequestReview,
            GitHubWebhookEvents.PullRequestReviewComment,
            GitHubWebhookEvents.Push,
            GitHubWebhookEvents.Release,
            GitHubWebhookEvents.Repository
        ];

        manyWebhookEvents = await Promise.all(
            manyEvents.map(
                async event =>
                    await seedWebhook(
                        repository,
                        repoWithManyWebhookEvents.id,
                        event
                    )
            )
        );
    });

    afterAll(async () => {
        // await clearTestData(prisma, { email: user.email });
        // await clearTestData(prisma, { email: userWithoutApiKeys.email });
    });

    it('should be defined', () => {
        expect(repository).toBeDefined();
    });

    // describe('Retrieval', () => {
    //     describe('METHOD: loadEvent', () => {
    //         it('Should return null for a non-existant webhook id', async () => {
    //             const res = await repository.loadEvent(
    //                 '56e6dd2eb4494ed008d595bd'
    //             );
    //             expect(res).toBeNull();
    //         });

    //         it('Should return the Webhook Event for an existant id', async () => {
    //             const res = await repository.loadEvent(webhookEvent.id);
    //             expect(res).toBeDefined();
    //             const keys = [
    //                 'eventType',
    //                 'id',
    //                 'createdAt',
    //                 'sender',
    //                 'action',
    //                 'eventKey'
    //             ];
    //             keys.map(key => expect(res[key]).toEqual(webhookEvent[key]));
    //             expect(res.data).toEqual(JSON.parse(webhookEvent.data));
    //         });
    //     });

    //     describe('METHOD: loadEvents', () => {
    //         it('Should return an empty array for a repo with no events', async () => {
    //             const res = await repository.loadEvents({
    //                 repository: repoWithoutWebhookEvents.name,
    //                 pageSize: 20
    //             });
    //             expect(res).toHaveLength(0);
    //         });

    //         describe('Should return a sized populated array for a repo with events', () => {
    //             it('single event', async () => {
    //                 const singleRes = await repository.loadEvents({
    //                     repository: repo.name,
    //                     pageSize: 1
    //                 });
    //                 expect(singleRes).toHaveLength(1);
    //             });

    //             it(`${WebhooksRepository.PageSizeLimit} inherent PageSizeLimit of the webhooks repository overrides too large pageSize args`, async () => {
    //                 const maxRes = await repository.loadEvents({
    //                     repository: repoWithManyWebhookEvents.name,
    //                     pageSize: 30
    //                 });
    //                 expect(maxRes).toHaveLength(
    //                     WebhooksRepository.PageSizeLimit
    //                 );
    //             });

    //             it('A controlled pageSize input returns that many results', async () => {
    //                 const controlledRes = await repository.loadEvents({
    //                     repository: repoWithManyWebhookEvents.name,
    //                     pageSize: 3
    //                 });
    //                 expect(controlledRes).toHaveLength(3);
    //             });
    //         });

    //         describe('For repositories with webhook events stored a paginated array of webhook events is returned adhering to the specified pageSize', () => {
    //             let maxSizePage;

    //             const pageSize = 3;

    //             beforeAll(async () => {
    //                 maxSizePage = await repository.loadEvents({
    //                     repository: repoWithManyWebhookEvents.name,
    //                     pageSize: 20
    //                 });
    //             });

    //             it('Base Index', async () => {
    //                 const firstPage = await repository.loadEvents({
    //                     repository: repoWithManyWebhookEvents.name,
    //                     pageSize
    //                 });

    //                 expect(firstPage).toHaveLength(pageSize);

    //                 firstPage.map((item, index) => {
    //                     expect(maxSizePage[index]).toMatchObject(item);
    //                 });
    //             });

    //             it('Offset Index', async () => {
    //                 const index = 1;
    //                 const secondPage = await repository.loadEvents({
    //                     repository: repoWithManyWebhookEvents.name,
    //                     pageSize,
    //                     index
    //                 });
    //                 secondPage.map((item, pageIndex) => {
    //                     expect(maxSizePage[index + pageIndex].id).toEqual(
    //                         item.id
    //                     );
    //                     expect(
    //                         maxSizePage[index + pageIndex].eventType
    //                     ).toEqual(item.eventType);
    //                 });
    //             });
    //         });
    //     });

    //     describe('METHOD: loadDynamoData', () => {
    //         it('Should return data for an existing record', async () => {
    //             await Promise.all(
    //                 manyWebhookEvents.map(async w => {
    //                     const eventKey = repository.repositoryEventKey(
    //                         repoWithManyWebhookEvents.id,
    //                         w.eventType,
    //                         w
    //                     );
    //                     const dynamoData = await repository.loadDynamoData(
    //                         eventKey
    //                     );
    //                     expect(dynamoData.Item).toBeDefined();
    //                     const webhookEventOriginalData = await loadJsonSampleDataFromEventType(
    //                         w.eventType
    //                     );
    //                     expect(webhookEventOriginalData).toMatchObject(
    //                         JSON.parse(dynamoData.Item.data)
    //                     );
    //                 })
    //             );
    //         });
    //     });
    // });

    // describe('Lifecycle: Creation, Retrieval and Deletion ', () => {
    //     GITHUB_WEBHOOK_EVENT_TYPES.map(eventTypeKey => {
    //         const eventType = GitHubWebhookEvents[eventTypeKey];

    //         describe(`${eventType}`, () => {
    //             let data;
    //             let result;

    //             beforeAll(async () => {
    //                 data = await TestingUtilities.loadJson(
    //                     path.join(
    //                         __dirname,
    //                         `parser/eventModels/${eventType}/sample.json`
    //                     )
    //                 );
    //             });

    //             it(`Should be able to store a ${eventType} webhook`, async () => {
    //                 result = await repository.storeEvent(
    //                     repoWithManyWebhookEvents.id,
    //                     eventType,
    //                     data
    //                 );

    //                 expect(result.id).toBeDefined();
    //                 expect(result.eventType).toEqual(eventType);

    //                 const retrieved = await repository.loadEvent(result.id);

    //                 expect(retrieved.data).toMatchObject(data);
    //             });

    //             it(`Should be able to delete the ${eventType} webhook event by id`, async () => {
    //                 await repository.deleteEvent(result.id);

    //                 const retrieved = await repository.loadEvent(result.id);

    //                 expect(retrieved).toBeNull();
    //             });
    //         });
    //     });
    // });
});
