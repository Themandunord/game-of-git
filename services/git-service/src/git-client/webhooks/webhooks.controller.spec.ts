import { WebhooksModule } from './webhooks.module';
import { GitClientService } from './../git-client.service';
import { Test, TestingModule } from '@nestjs/testing';
import { WebhooksController } from './webhooks.controller';
import { GitClientModule } from '../git-client.module';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongooseModule } from '@nestjs/mongoose';
import { WebhooksService } from './webhooks.service';
import { RepositoryWebhookSchema } from './RepositoryWebhook.schema';
import { AppKeyModule } from '../../app-key/app-key.module';
import { AppKeyService } from '../../app-key/app-key.service';
import { forwardRef } from '@nestjs/common';

const mockGitClientService = jest.mock('./../git-client.service');
const mockAppKeyService = jest.mock('../../app-key/app-key.service');

describe('Webhooks Controller', () => {
	let controller: WebhooksController;
	let mongod: MongoMemoryServer;

	beforeEach(async () => {
		mongod = new MongoMemoryServer();
		const uri = await mongod.getConnectionString();

		const module: TestingModule = await Test.createTestingModule({
			imports: [
				GitClientModule,
				// GitClientService,
				AppKeyModule,
				// AppKeyService,
				MongooseModule.forFeature([
					{ name: 'RepositoryWebhook', schema: RepositoryWebhookSchema },
				]),
				MongooseModule.forRoot(uri),
				// WebhooksModule,
			],
			providers: [WebhooksService, GitClientService],
			controllers: [WebhooksController],
		})
			.overrideProvider(GitClientService)
			.useValue(mockGitClientService)
			.overrideProvider(AppKeyService)
			.useValue(mockAppKeyService)
			.compile();

		controller = module.get<WebhooksController>(WebhooksController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
