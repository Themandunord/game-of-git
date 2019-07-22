import { AppKey } from './../graphql.schema.d';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { AppKeyService } from '../app-key/app-key.service';
import { AppKeyModule } from './../app-key/app-key.module';
import { GitClientModule } from './git-client.module';
import { GitClientService } from './git-client.service';
import { WebhooksModule } from './webhooks/webhooks.module';
import { WebhooksService } from './webhooks/webhooks.service';

// const appKeyServiceMock = jest.mock('./../app-key/app-key.service');
const appKeyServiceMock = jest.genMockFromModule<AppKeyService>('./../app-key/app-key.service');
const webhooksServiceMock = jest.mock('./webhooks/webhooks.service');

// For transient errors while using shitty ass bus WiFi
jest.setTimeout(15000);

describe('GitClientService', () => {
	let service: GitClientService;
	let mongod: MongoMemoryServer;
	const validGitAppKey = process.env.GIT_ACCESS_TOKEN;

	beforeEach(async () => {
		mongod = new MongoMemoryServer();
		const uri = await mongod.getConnectionString();

		const module: TestingModule = await Test.createTestingModule({
			imports: [AppKeyModule, WebhooksModule, GitClientModule, MongooseModule.forRoot(uri)],
			providers: [WebhooksService, GitClientService]
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

	it('Webhooks Service Resolves', () => {
		expect(service.webhooks).toBeDefined();
	});

	describe('Testing an App Key', () => {
		// TODO: HttpClient Module + Service to wrap axios and mock the results from GitHub's API
		it('Should return true if the axios post call returns true', async () => {
			await expect(service.testAppKey(validGitAppKey, 'miking-the-viking')).resolves.toEqual(
				true
			);
		});

		it('Should return false if the axios post call returns false', async () => {
			await expect(service.testAppKey('asdfasdfadsf', 'miking-the-viking')).resolves.toEqual(
				false
			);
		});
	});

	describe('Retrieving a user\'s repositories', () => {
		it('Should return an array of repositories from the API cal', async () => {
			appKeyServiceMock.get = jest.fn(async () => [
				{
					key: validGitAppKey
				} as AppKey
			]);

			const result = await service.getRepositories('123123123', 'miking-the-viking', 1);

			// should be an array
			expect(result).toBeInstanceOf(Array);

			expect(result).toHaveLength(1);
		});
	});

	describe('Retrieving the details of a repository', () => {
		it('Should retrieve the details for a repository', async () => {
			const repositoryName = 'game-of-git';
			const repositoryOwner = 'miking-the-viking';
			appKeyServiceMock.get = jest.fn(async () => [
				{
					key: validGitAppKey
				} as AppKey
			]);

			const result = await service.getRepositoryDetails(
				'123123',
				repositoryName,
				repositoryOwner
			);

			expect(result).toBeDefined();
			expect(result.name).toEqual(repositoryName);
		});
	});
});
