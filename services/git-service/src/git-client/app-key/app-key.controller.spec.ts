import { GitClientService } from '../git-client.service';
import { AppKeyService } from './app-key.service';
import { AppKeyResolver } from './app-key.resolver';
import { Test, TestingModule } from '@nestjs/testing';
import { AppKeyController } from './app-key.controller';
import { UsersModule } from '../../users/users.module';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongooseModule } from '@nestjs/mongoose';
import { GitClientModule } from '../git-client.module';

const appKeyResolverMock = jest.mock('./app-key.resolver');
const gitClientServiceMock = jest.mock('./../git-client.service');

describe('AppKey Controller', () => {
	let controller: AppKeyController;
	let mongod: MongoMemoryServer;

	beforeEach(async () => {
		mongod = new MongoMemoryServer();
		const uri = await mongod.getConnectionString();

		const module: TestingModule = await Test.createTestingModule({
			imports: [UsersModule, GitClientModule, MongooseModule.forRoot(uri)],
			providers: [AppKeyResolver, AppKeyService],
			controllers: [AppKeyController]
		})
			.overrideProvider(AppKeyResolver)
			.useValue(appKeyResolverMock)
			.overrideProvider(GitClientService)
			.useValue(gitClientServiceMock)
			.compile();

		controller = module.get<AppKeyController>(AppKeyController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});

	xdescribe('User Adding GitHub App Key', () => {
		// only an authenticated user can add an app key
		// returns the result of
		// app key service storekey, which is called once,
		// if the key, user, name, and username are all present (Happy path)
		// (Unhappy paths)
		// @Todo Middleware validator that validates the parameters of NestJs Functions, if it doesn't already exist
	});

	xdescribe('Validating a GitHub App Key', () => {
		// only authenticated user can call validate-key
		// @Todo Middleware validator that validates the parameters of function's requirements
		// returns the result of
		// Calls app key sevice validate key, called once,
		// with the passed in key and user
	});

	// user listing github keys? @TODO, not yet implemented

	// user deleting github keys? @TODO, not yet implemented

	// retrieving all github keys being used to observe a given repository? @TODO, not yet implemented

	// retrieving all repositories being tracked using a given key? @TODO, not yet implemented
});
