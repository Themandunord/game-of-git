import { User } from '@game-of-git/common';
import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as faker from 'faker';
import ps from '../pubsub';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { AuthModule } from '../auth/auth.module';
import * as camelcasekeys from 'camelcase-keys';
import { ApiKeyModule } from '../repositories/entities/api-key/api-key.module';

const userServiceMock = jest.genMockFromModule<UserService>('./user.service');

const fakeUserResult = {
    id: faker.random.uuid(),
    name: faker.name.firstName(),
    git_login: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.random.word(),
    role: faker.random.arrayElement(['ADMIN', 'USER']),
    api_keys: [],
    games: []
};

describe('UserResolver', () => {
    let resolver: UserResolver;
    let user = null;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [AuthModule, ApiKeyModule],
            providers: [
                UserResolver,
                {
                    provide: 'PUB_SUB',
                    useValue: ps
                },
                UserService
            ]
        })
            .overrideProvider(UserService)
            .useValue(userServiceMock)
            .compile();

        resolver = module.get<UserResolver>(UserResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });

    describe('METHOD: me', () => {
        let matchingScenarios;

        describe('Returns a user that matches', () => {
            const CASES = [
                {
                    it: 'on id',
                    data: user => ({ id: user.id }),
                    op: 'getUserById'
                },
                {
                    it: 'on email',
                    data: user => ({ email: user.email }),
                    op: 'getUserByEmail'
                }
            ];

            CASES.map(scenario =>
                it(scenario.it, async () => {
                    const userData = scenario.data(fakeUserResult) as User;

                    userServiceMock.createUser = jest.fn(
                        async () => fakeUserResult as any
                    );

                    userServiceMock[scenario.op] = jest.fn(
                        async () => fakeUserResult as any
                    );

                    const userReturned = await resolver.me(userData);

                    expect(userReturned).toMatchObject(
                        camelcasekeys(fakeUserResult)
                    );
                })
            );
        });

        it('Throws NotFoundException if there is no matching user id', async () => {
            const userData = {
                id: 'asdfasdfasdferwerwer'
            } as User;

            userServiceMock.getUserById = jest.fn(async () => {
                throw new NotFoundException();
            });

            await expect(resolver.me(userData)).rejects.toThrowError(
                NotFoundException
            );
        });
    });
});
