import { Test, TestingModule } from '@nestjs/testing';
import { User } from '../graphql.schema';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

const usersResolverMock = jest.genMockFromModule<UsersResolver>('./users.resolver');

describe('UsersService', () => {
	let service: UsersService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [UsersService, UsersResolver],
		})
			.overrideProvider(UsersResolver)
			.useValue(usersResolverMock)
			.compile();

		service = module.get<UsersService>(UsersService);
	});

	describe('Retrieving a user by ID', () => {
		it('Calls UsersResulver.getUser once and returns the correctly shaped result', async () => {
			const userDataBase = {
				email: 'someemail',
				id: 'someID1234',
				name: 'some name',
				gitLogin: 'somegitLogin',
			};
			const userData = {
				...userDataBase,
				keys: [{}],
			};
			const expectedUserData = {
				...userDataBase,
				hasAppKey: true,
			};
			const getUserMock = jest.fn(async () => {
				return userData as User;
			});
			usersResolverMock.getUser = getUserMock;

			await expect(service.getById('someID1234')).resolves.toEqual(expectedUserData);
			expect(getUserMock).toHaveBeenCalledTimes(1);
		});

		it('Calls UsersResolver.getUser once and returns null when not found', async () => {
			const getUserMock = jest.fn(async () => {
				return null;
			});
			usersResolverMock.getUser = getUserMock;

			await expect(service.getById('someID1234')).resolves.toBeNull();
			expect(getUserMock).toHaveBeenCalledTimes(1);
		});
	});

	describe('Retrieving all users', () => {
		it('Returns an array of users', async () => {
			const mockResult = [{}, {}] as User[];
			const getUsersMock = jest.fn(async () => mockResult);
			usersResolverMock.getUsers = getUsersMock;

			await expect(service.getAll()).resolves.toEqual(mockResult);
			expect(getUsersMock).toHaveBeenCalledTimes(1);
		});
	});

	it('Retrieving a user by email', async () => {
		const userDataBase = {
			email: 'someemail',
			id: 'someID1234',
			name: 'some name',
			gitLogin: 'somegitLogin',
		};
		const userData = {
			...userDataBase,
			keys: [{}],
		};
		const expectedUserData = {
			...userDataBase,
			hasAppKey: true,
		};
		const getUserMock = jest.fn(async () => {
			return userData as User;
		});
		usersResolverMock.getUser = getUserMock;

		await expect(service.get('someemail')).resolves.toEqual(expectedUserData);
		expect(getUserMock).toHaveBeenCalledTimes(1);
	});
});
