import { WebhooksService } from './webhooks/webhooks.service';
import { WebhooksModule } from './webhooks/webhooks.module';
import { Test, TestingModule } from '@nestjs/testing';
import { AppKeyService } from '../app-key/app-key.service';
import { AppKeyModule } from './../app-key/app-key.module';
import { GitClientService } from './git-client.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RepositoryWebhookSchema } from './webhooks/RepositoryWebhook.schema';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { GitClientModule } from './git-client.module';

const appKeyServiceMock = jest.mock('./../app-key/app-key.service');
const webhooksServiceMock = jest.mock('./webhooks/webhooks.service');

describe('GitClientService', () => {
	let service: GitClientService;
	let mongod: MongoMemoryServer;

	beforeEach(async () => {
		mongod = new MongoMemoryServer();
		const uri = await mongod.getConnectionString();

		const module: TestingModule = await Test.createTestingModule({
			imports: [AppKeyModule, WebhooksModule, GitClientModule, MongooseModule.forRoot(uri)],
			providers: [WebhooksService, GitClientService],
		})
			.overrideProvider(AppKeyService)
			.useValue(appKeyServiceMock)
			.overrideProvider(WebhooksService)
			.useValue(webhooksServiceMock)
			.compile();

		service = module.get<GitClientService>(GitClientService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	xdescribe('Testing an App Key', () => {
		// TODO: HttpClient Module + Service to wrap axios and mock the results from GitHub's API
		it('Should return true if the axios post call returns true', async () => {
			// await expect(service.testAppKey(key, user)).resolves.toEqual(true);
		});
	});

	xdescribe('Retrieving a user\'s repositories', () => {});
});
