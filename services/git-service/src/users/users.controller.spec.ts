import { GitClientService } from './../git-client/git-client.service';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { AppKeyModule } from './../app-key/app-key.module';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { RepositoryWebhookSchema } from '../git-client/webhooks/RepositoryWebhook.schema';

import { MongoMemoryServer } from 'mongodb-memory-server';
import { WebhooksModule } from '../git-client/webhooks/webhooks.module';

const usersServiceMock = jest.mock('./users.service');
const gitClientServiceMock = jest.mock('./../git-client/git-client.service');

describe('Users Controller', () => {
	let controller: UsersController;
	let mongod: MongoMemoryServer;

	beforeEach(async () => {
		mongod = new MongoMemoryServer();
		const uri = await mongod.getConnectionString();
		// const port = await mongod.getPort();
		// const dbPath = await mongod.getDbPath();
		// const dbName = await mongod.getDbName();
		// // some code
		// //   ... where you may use `uri` for as a connection string for mongodb or mongoose
		// // you may check instance status, after you got `uri` it must be `true`
		// mongod.getInstanceInfo(); // return Object with instance data
		// // you may stop mongod manually
		// await mongod.stop();
		// // when mongod killed, it's running status should be `false`
		// mongod.getInstanceInfo();
		// even you forget to stop `mongod` when you exit from script
		// special childProcess killer will shutdown it for you

		const module: TestingModule = await Test.createTestingModule({
			imports: [
				AppKeyModule,
				MongooseModule.forRoot(uri),
				// MongooseModule.forFeature([
				// 	{ name: 'RepositoryWebhook', schema: RepositoryWebhookSchema },
				// ]),
			],
			providers: [
				UsersService,
				// {
				// 	provide: getModelToken('RepositoryWebhook'),
				// 	useValue: RepositoryWebhookSchema,
				// },
			],
			controllers: [UsersController],
		})
			.overrideProvider(UsersService)
			.useValue(usersServiceMock)
			.overrideProvider(GitClientService)
			.useValue(gitClientServiceMock)
			.compile();
		controller = module.get<UsersController>(UsersController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
