import { ObjectID } from 'bson';
import { MockCommandBus } from './../../../../../utilities/MockCommandBus';
import { CommandBus, CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { MongoMemoryServer } from 'mongodb-memory-server';
import * as path from 'path';
import { AppKeyService } from '../../app-key/app-key.service';
import TestingUtilities from './../../../../../utilities/testing';
import { AppKeyModule } from './../../app-key/app-key.module';
import { GitClientModule } from './../git-client.module';
import { GitClientService } from './../git-client.service';
import { HandleWebhookCommand } from './commands/handle-webhook.command';
import { HandleWebhookHandler } from './commands/handle-webhook.handler';
import { EventModelFactory } from './parser/EventModelFactory';
import { GitHubWebhookEvents } from './parser/eventModels/EventType.constants';
import { GitHubWebhookEventType } from './parser/eventModels/EventType.types';
import { ParserService } from './parser/parser.service';
import { RepositoryWebhookSchema } from './RepositoryWebhook.schema';
import { WebhooksService } from './webhooks.service';
import { WebhooksRepository } from './webhooks.repository';

const mockGitClientService = jest.mock('./../git-client.service');
const mockAppKeyService = jest.mock('../../app-key/app-key.service');

const GITHUB_WEBHOOK_EVENT_TYPES = Object.keys(GitHubWebhookEvents) as GitHubWebhookEventType[];

const REPOSITORY = process.env.GIT_TESTING_REPOSITORY;

describe('WebhooksService', () => {
	let service: WebhooksService;
	let mongod: MongoMemoryServer;
	let mockCommandBus: MockCommandBus;

	// beforeEach(async () => {
	beforeAll(async () => {
		mongod = new MongoMemoryServer();
		const uri = await mongod.getConnectionString();

		mockCommandBus = new MockCommandBus();

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
			providers: [
				WebhooksRepository,
				WebhooksService,
				GitClientService,
				ParserService,
				HandleWebhookHandler
			]
		})
			.overrideProvider(CommandBus)
			.useValue(mockCommandBus)
			.overrideProvider(GitClientService)
			.useValue(mockGitClientService)
			.overrideProvider(AppKeyService)
			.useValue(mockAppKeyService)
			.compile();

		service = module.get<WebhooksService>(WebhooksService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	xdescribe('Repository Webhook Retrieval', () => {});

	xdescribe('Repository Webhook Creation', () => {});

	xdescribe('Repository Webhook Deletion', () => {});

	xdescribe('Retrieving a Repository\'s locally stored events', () => {});

	xdescribe('Retrieving a Repository\'s local stored event count', () => {});

	describe('Inbound Webhook Handling', async () => {
		// for each event type suported...
		await Promise.all(
			GITHUB_WEBHOOK_EVENT_TYPES.map(async eventTypeKey => {
				// ['CheckRun'].map(async eventTypeKey => {
				describe(`${eventTypeKey}`, () => {
					const eventType = GitHubWebhookEvents[eventTypeKey];

					let sampleJson: any;

					beforeAll(async () => {
						sampleJson = await TestingUtilities.loadJson(
							path.join(__dirname, `parser/eventModels/${eventType}/sample.json`)
						);
					});

					it('Should dispatch a HandleWebhookCommand with the webhook event id', async () => {
						mockCommandBus.execute = jest.fn(val => {
							return expect(val).toBeInstanceOf(HandleWebhookCommand);
						});

						await service.handleEvent(REPOSITORY, eventType, sampleJson);

						expect(mockCommandBus.execute).toBeCalledTimes(1);
					});
				});
			})
		);
	});
});
