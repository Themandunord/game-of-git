import { CommandBus, CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { ObjectID } from 'bson';
import { MongoMemoryServer } from 'mongodb-memory-server';
import * as path from 'path';
import TestingUtilities from '../../../../../utilities/testing';
import { AppKeyModule } from '../app-key/app-key.module';
import { AppKeyService } from '../app-key/app-key.service';
import { GitClientModule } from '../git-client.module';
import { GitClientService } from '../git-client.service';
import { MockCommandBus } from './../../../../../utilities/MockCommandBus';
import { HandleWebhookHandler } from './commands/handle-webhook.handler';
import { GitHubWebhookEvents } from './parser/eventModels/EventType.constants';
import { GitHubWebhookEventType } from './parser/eventModels/EventType.types';
import { ParserService } from './parser/parser.service';
import { RepositoryWebhookSchema } from './RepositoryWebhook.schema';
import { WebhooksRepository } from './webhooks.repository';
import { WebhooksService } from './webhooks.service';
import { WebhookEventsResolver } from './webhooks-events.resolver';

const mockGitClientService = jest.mock('./../git-client.service');
const mockAppKeyService = jest.mock('./../app-key/app-key.service');
const mockWebhooksService = jest.mock('./webhooks.service');
const mockWebhookEventsResolver = jest.genMockFromModule<WebhookEventsResolver>(
	'./webhooks-events.resolver'
);

const OWNER = process.env.GIT_TESTING_USER;
const REPOSITORY = process.env.GIT_TESTING_REPOSITORY;

const GITHUB_WEBHOOK_EVENT_TYPES = Object.keys(GitHubWebhookEvents) as GitHubWebhookEventType[];

describe('Webhooks Repository', () => {
	let repository: WebhooksRepository;
	let mongod: MongoMemoryServer;
	const mockCommandBus = new MockCommandBus();

	beforeAll(async () => {
		mongod = new MongoMemoryServer();
		const uri = await mongod.getConnectionString();

		mockWebhookEventsResolver.createWebhookEvent = async (args: any, info: any) => {
			return {} as any;
		};

		const module: TestingModule = await Test.createTestingModule({
			imports: [
				GitClientModule,
				AppKeyModule,
				MongooseModule.forFeature([
					{ name: 'RepositoryWebhook', schema: RepositoryWebhookSchema }
				]),
				MongooseModule.forRoot(uri),
				CqrsModule
			],
			providers: [WebhooksService, GitClientService, ParserService, HandleWebhookHandler]
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
	});

	it('should be defined', () => {
		expect(repository).toBeDefined();
	});

	describe('Retrieval', () => {
		it('Should return null for a non-existant webhook', async () => {
			const res = await repository.getById('56e6dd2eb4494ed008d595bd');
			expect(res).toBeNull();
		});

		it('Should return an empty array for a repo with no events', async () => {
			const res = await repository.getAll({
				repository: REPOSITORY
			});
			expect(res).toHaveLength(0);
		});
	});

	describe('Creation', async () => {
		await Promise.all(
			GITHUB_WEBHOOK_EVENT_TYPES.map(async eventTypeKey => {
				const eventType = GitHubWebhookEvents[eventTypeKey];

				describe(`${eventType}`, () => {
					let data;
					let stringifiedData;
					let result;
					beforeAll(async () => {
						data = await TestingUtilities.loadJson(
							path.join(__dirname, `parser/eventModels/${eventType}/sample.json`)
						);
						stringifiedData = data.toString();
						result = await repository.store(OWNER, REPOSITORY, eventType, data);
					});

					it(`Should be able to store a ${eventType} webhook`, async () => {
						expect(result).not.toBeNull();
						expect(result._id).toBeInstanceOf(ObjectID);
						expect(result.repository).toEqual(REPOSITORY);
						expect(result.eventType).toEqual(eventType);
						expect(result.data.toString()).toEqual(stringifiedData);
					});

					it(`Should be able to retrieve the created ${eventType} webhook by id`, async () => {
						const retrieved = await repository.getById(result._id);
						expect(retrieved.repository).toEqual(REPOSITORY);
						expect(retrieved.eventType).toEqual(eventType);
						expect(retrieved.data.toString()).toEqual(stringifiedData);
					});

					it(`Should be able to retrieve the created ${eventType} webhook by in the get all query for this repository`, async () => {
						const retrieved = await repository.getAll({
							repository: REPOSITORY,
							eventType
						});
						expect(retrieved).toHaveLength(1);
						expect(retrieved[0].repository).toEqual(REPOSITORY);
						expect(retrieved[0].eventType).toEqual(eventType);
						expect(retrieved[0].data.toString()).toEqual(stringifiedData);
					});
				});
			})
		);
	});
});
