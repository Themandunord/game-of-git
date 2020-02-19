import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { GraphqlModule } from '../graphql/graphql.module';
import { GraphqlService } from '../graphql/graphql.service';
import {
    purgeUsers,
    seedUser,
    createUserMutationVariableFactory
} from '../../testUtils/user';
import * as faker from 'faker';
import { decode } from 'jsonwebtoken';

describe('UserService', () => {
    let service: UserService;
    let gqlService: GraphqlService;

    const createdUserPurgeArray = [];

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [GraphqlModule],
            providers: [UserService]
        }).compile();

        service = module.get<UserService>(UserService);
        gqlService = module.get<GraphqlService>(GraphqlService);
    });

    afterAll(async () => {
        await purgeUsers(gqlService, createdUserPurgeArray);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('createUser', () => {
        it('Throws when the email already exists', async () => {
            const existing = await seedUser(gqlService, createdUserPurgeArray);

            await expect(
                service.createUser(
                    createUserMutationVariableFactory({ email: existing.email })
                )
            ).rejects.toThrow(
                `Uniqueness violation. duplicate key value violates unique constraint \"users_email_key\"`
            );
        });

        it('Creates the user', async () => {
            const userData = createUserMutationVariableFactory();

            const createUserResult = await service.createUser(userData);

            // include in the userPurgeArray
            createdUserPurgeArray.push(createUserResult);

            // validate the user exists
            const userRecord = (await gqlService.sdk.UserByEmail({
                email: createUserResult.email
            })).users[0];

            expect(userRecord).toMatchObject(createUserResult);
        });
    });

    describe('User Retrieval', () => {
        describe('getUserById', () => {
            it('Returns undefined for a non-existant id', async () => {
                await expect(
                    service.getUserById(faker.random.uuid())
                ).resolves.toBeUndefined();
            });

            it('Returns an existing user when using a valid id', async () => {
                const existing = await seedUser(
                    gqlService,
                    createdUserPurgeArray
                );

                delete existing.password;
                delete existing.createdAt;

                await expect(
                    service.getUserById(existing.id)
                ).resolves.toMatchObject({
                    ...existing
                });
            });
        });

        describe('getUserByEmail', () => {
            it('Returns undefined for a non-existant email', async () => {
                await expect(
                    service.getUserByEmail(faker.internet.email())
                ).resolves.toBeUndefined();
            });

            it('Returns an existing user when using a valid email', async () => {
                const existing = await seedUser(
                    gqlService,
                    createdUserPurgeArray
                );

                delete existing.password;
                delete existing.createdAt;

                await expect(
                    service.getUserByEmail(existing.email)
                ).resolves.toMatchObject({
                    ...existing
                });
            });
        });
    });
});
