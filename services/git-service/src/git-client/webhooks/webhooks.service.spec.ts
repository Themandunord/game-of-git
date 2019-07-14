import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { AppKeyService } from '../../app-key/app-key.service';
import { AppKeyModule } from './../../app-key/app-key.module';
import { GitClientModule } from './../git-client.module';
import { GitClientService } from './../git-client.service';
import { ParserService } from './parser/parser.service';
import { RepositoryWebhookSchema } from './RepositoryWebhook.schema';
import { WebhooksService } from './webhooks.service';

const mockGitClientService = jest.mock('./../git-client.service');
const mockAppKeyService = jest.mock('../../app-key/app-key.service');

describe('WebhooksService', () => {
	let service: WebhooksService;
	let mongod: MongoMemoryServer;

	beforeEach(async () => {
		mongod = new MongoMemoryServer();
		const uri = await mongod.getConnectionString();

		const module: TestingModule = await Test.createTestingModule({
			imports: [
				GitClientModule,
				AppKeyModule,
				// WebhooksModule,
				MongooseModule.forFeature([
					{ name: 'RepositoryWebhook', schema: RepositoryWebhookSchema },
				]),
				MongooseModule.forRoot(uri),
			],
			providers: [WebhooksService, GitClientService, ParserService],
		})
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
});
