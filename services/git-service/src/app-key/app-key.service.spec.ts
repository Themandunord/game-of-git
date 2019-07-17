import { AppKey } from './../graphql.schema.d';
import { UsersService } from './../users/users.service';
import { UsersModule } from './../users/users.module';
import { GitClientService } from './../git-client/git-client.service';
import { GitClientModule } from './../git-client/git-client.module';
import { Test, TestingModule } from '@nestjs/testing';
import { AppKeyService } from './app-key.service';
import { AppKeyResolver } from './app-key.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const gitClientServiceMock = jest.genMockFromModule<GitClientService>(
	'./../git-client/git-client.service',
);
const appKeyResolverMock = jest.genMockFromModule<AppKeyResolver>('./app-key.resolver');
const usersServiceMock = jest.mock('./../users/users.service');

const TEST_APP_KEY_SCENARIOS = [
	{
		it: 'Executes testAppKey once on the GitClient and returns true when the result is true',
		scenario: {
			testAppKeyMock: jest.fn(async () => {
				return true;
			}),
			toEqual: true,
			testAppKeyMockTimes: 1,
			user: 'someuser',
			key: 'somekey',
		},
	},
	{
		it: 'Executes testAppKey once on the GitClient and returns false when the result is false',
		scenario: {
			testAppKeyMock: jest.fn(async () => {
				return false;
			}),
			toEqual: false,
			testAppKeyMockTimes: 1,
			user: 'someuser',
			key: 'somekey',
		},
	},
];

const STORE_APP_KEY_SCENARIOS = [
	{
		it: 'Bails when the app key is invalid',
		scenario: {
			testAppKeyMock: jest.fn(async () => {
				return false;
			}),
			testAppKeyMockTimes: 1,
			getAppKeyMock: jest.fn(async () => {
				return {} as AppKey;
			}),
			getAppKeyMockTimes: 0,
			createAppKeyMock: jest.fn(async () => {
				return {} as AppKey;
			}),
			createAppKeyMockTimes: 0,
		},
	},
	{
		it: 'Bails when the App Key already exists',
		scenario: {
			testAppKeyMock: jest.fn(async () => {
				return true;
			}),
			testAppKeyMockTimes: 1,
			getAppKeyMock: jest.fn(async () => {
				return {} as AppKey;
			}),
			getAppKeyMockTimes: 1,
			createAppKeyMock: jest.fn(async () => {
				return {} as AppKey;
			}),
			createAppKeyMockTimes: 0,
			storeKeyResult: undefined,
		},
	},
	{
		it: 'Successfully calls createAppKey once when the AppKey doesn\'t exist and is validated',
		scenario: {
			testAppKeyMock: jest.fn(async () => {
				return true;
			}),
			testAppKeyMockTimes: 1,
			getAppKeyMock: jest.fn(async () => {
				return null;
			}),
			getAppKeyMockTimes: 1,
			createAppKeyMock: jest.fn(async () => {
				return {} as AppKey;
			}),
			createAppKeyMockTimes: 1,
			storeKeyResult: {},
		},
	},
];

describe('AppKeyService', () => {
	let service: AppKeyService;
	let mongod: MongoMemoryServer;

	beforeEach(async () => {
		mongod = new MongoMemoryServer();
		const uri = await mongod.getConnectionString();

		const module: TestingModule = await Test.createTestingModule({
			imports: [GitClientModule, UsersModule, MongooseModule.forRoot(uri)],
			providers: [AppKeyService, AppKeyResolver],
		})
			.overrideProvider(GitClientService)
			.useValue(gitClientServiceMock)
			.overrideProvider(AppKeyResolver)
			.useValue(appKeyResolverMock)
			.overrideProvider(UsersService)
			.useValue(usersServiceMock)
			.compile();

		service = module.get<AppKeyService>(AppKeyService);
	});

	it('The AppKeyService should be defined', () => {
		expect(service).toBeDefined();
	});

	describe('Retrieving a AppKey by User ID', () => {
		it('Executes getAppKeys once on the AppKeyResolver', async () => {
			const getAppKeysMock = jest.fn(async () => {
				return [];
			});
			appKeyResolverMock.getAppKeys = getAppKeysMock;

			await expect(service.get('someUser')).resolves.toEqual([]);

			expect(getAppKeysMock).toHaveBeenCalledTimes(1);
		});
	});

	describe('Validating an AppKey', () => {
		describe('Scenarios with populated values', async () => {
			await Promise.all(
				TEST_APP_KEY_SCENARIOS.map(async config => {
					const scenario = config.scenario;
					it(config.it, async () => {
						const testAppKeyMock = scenario.testAppKeyMock;
						gitClientServiceMock.testAppKey = testAppKeyMock;

						const key = scenario.key;
						const user = scenario.user;

						await expect(service.validateKey(key, user)).resolves.toEqual(
							scenario.toEqual,
						);
						expect(testAppKeyMock).toHaveBeenCalledTimes(scenario.testAppKeyMockTimes);
						expect(testAppKeyMock).toHaveBeenCalledWith(scenario.key, scenario.user);
					});
				}),
			);
		});
	});

	describe('Storing an AppKey', () => {
		describe('Scenarios', async () => {
			STORE_APP_KEY_SCENARIOS.map(async config => {
				await it(config.it, async () => {
					const scenario = config.scenario;
					const testAppKeyMock = scenario.testAppKeyMock;
					gitClientServiceMock.testAppKey = testAppKeyMock;

					const getAppKeyMock = scenario.getAppKeyMock;
					appKeyResolverMock.getAppKey = getAppKeyMock;

					const createAppKeyMock = scenario.createAppKeyMock;
					appKeyResolverMock.createAppKey = createAppKeyMock;

					const key = 'somekey';
					const user = 'asdfajhoiu432lasrf';
					const name = 'some repo';
					const username = 'miking-the-viking';

					await expect(service.storeKey(key, user, name, username)).resolves.toEqual(
						scenario.storeKeyResult,
					);

					const mocks = [
						{
							func: testAppKeyMock,
							times: scenario.testAppKeyMockTimes,
						},
						{
							func: getAppKeyMock,
							times: scenario.getAppKeyMockTimes,
						},
						{
							func: createAppKeyMock,
							times: scenario.createAppKeyMockTimes,
						},
					];
					mocks.map(mock => {
						if (mock.times > 0) {
							expect(mock.func).toHaveBeenCalledTimes(mock.times);
						} else {
							expect(mock.func).not.toHaveBeenCalled();
						}
					});
				});
			});
		});

		it('Executes testAppKey once on the GitClient', async () => {
			const testAppKeyMock = jest.fn(async () => {
				return true;
			});
			gitClientServiceMock.testAppKey = testAppKeyMock;

			const key = 'somekey';
			const user = 'someuser';

			await service.validateKey(key, user);

			expect(testAppKeyMock).toHaveBeenCalledTimes(1);
			expect(testAppKeyMock).toHaveBeenCalledWith(key, user);
		});
	});
});
