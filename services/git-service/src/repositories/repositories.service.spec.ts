import { WebhooksModule } from './../git-client/webhooks/webhooks.module';
import { GitClientService } from './../git-client/git-client.service';
import { GitClientModule } from './../git-client/git-client.module';
import { RepositoriesResolver } from './repositories.resolver';
import { Test, TestingModule } from '@nestjs/testing';
import { RepositoriesService } from './repositories.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RepositoryWebhookSchema } from '../git-client/webhooks/RepositoryWebhook.schema';
import { WebhooksService } from '../git-client/webhooks/webhooks.service';
import { MongoMemoryServer } from 'mongodb-memory-server';

const gitClientServiceMock = jest.mock('./../git-client/git-client.service');
const webhooksServiceMock = jest.mock('./../git-client/webhooks/webhooks.service');
const repositoriesResolverMock = jest.mock('./repositories.resolver');

describe('RepositoriesService', () => {
	let service: RepositoriesService;
	let mongod: MongoMemoryServer;

	beforeEach(async () => {
		mongod = new MongoMemoryServer();
		const uri = await mongod.getConnectionString();

		// MongooseModule.forFeature([{ name: 'RepositoryWebhook', schema: RepositoryWebhookSchema }]);

		const module: TestingModule = await Test.createTestingModule({
			imports: [GitClientModule, WebhooksModule, MongooseModule.forRoot(uri)],
			providers: [RepositoriesService, RepositoriesResolver]
		})
			.overrideProvider(GitClientService)
			.useValue(gitClientServiceMock)
			.overrideProvider(RepositoriesResolver)
			.useValue(repositoriesResolverMock)
			.overrideProvider(WebhooksService)
			.useValue(webhooksServiceMock)
			.compile();

		service = module.get<RepositoriesService>(RepositoriesService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	xdescribe('Retriving the Repository Selection Set', () => {});

	xdescribe('Retrieving Repositories', () => {});

	xdescribe('Retrieving Repositories from GitHub', () => {});

	xdescribe("Creating a Respotiroy Record and Updating it's isTracked status", () => {});
});
