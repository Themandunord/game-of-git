import { AppKeyIdOrKeyArgs, UserIdOrEmailArgs } from '@game-of-git/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppKeyCreateInput } from '../../../generated/prisma-client';
import { PrismaModule } from '../../../prisma/prisma.module';
import { PrismaService } from '../../../prisma/prisma.service';
import { createOrRetrieveAppKey } from '../../../utilities/testing/git.app-key.prisma';
import { clearTestData } from '../../../utilities/testing/teardown';
import { createOrRetrieveUser } from '../../../utilities/testing/user.prisma';
import { AppKeyInternalResolver } from './app-key.internal.resolver';

export const TEST_APP_KEY = 'mamamamamamamamama';

describe('Internal App Key Resolver', () => {
    let resolver: AppKeyInternalResolver;
    let prisma: PrismaService;
    let user;
    let userWithoutAppKeys;
    let appKey;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [PrismaModule],
            providers: [AppKeyInternalResolver]
        }).compile();

        resolver = module.get<AppKeyInternalResolver>(AppKeyInternalResolver);
        prisma = module.get<PrismaService>(PrismaService);

        user = await createOrRetrieveUser(prisma);
        userWithoutAppKeys = await createOrRetrieveUser(prisma, {
            email: 'someOTherTestUSer@test.com'
        });
        appKey = await createOrRetrieveAppKey(prisma, {
            key: TEST_APP_KEY,
            user: {
                email: user.email
            }
        });
    });

    afterAll(async () => {
        await clearTestData(prisma, { id: user.id });
        await clearTestData(prisma, { id: userWithoutAppKeys.id });
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });

    describe('METHOD: getByIdOrKey', () => {
        describe('idOrKey argument validation', () => {
            it('Throws an error when neither id or key are provided', async () => {
                const invalidArgs = {} as AppKeyIdOrKeyArgs;

                await expect(
                    resolver.getByIdOrKey(invalidArgs)
                ).rejects.toThrow(
                    'You provided an invalid argument for the where selector on AppKey. Please provide exactly one unique field and value.'
                );
            });
        });
        const INVALID_CASES = [
            {
                it: 'on id',
                data: (
                    appKey = {
                        id: 'asdfasdf'
                    }
                ) => ({ id: appKey.id })
            },
            {
                it: 'on key',
                data: (appKey = { key: 'zzzzzzzzzzzzzzzzz' }) => ({
                    key: appKey.key
                })
            }
        ];

        const VALID_CASES = [
            {
                it: 'on id',
                data: appKey => ({ id: appKey.id })
            },
            {
                it: 'on key',
                data: appKey => ({ key: appKey.key })
            }
        ];

        describe("Requesting a valid app key id or email that doesn't exist returns null", () => {
            INVALID_CASES.map(scenario =>
                it(scenario.it, async () => {
                    const appKeyData = scenario.data() as AppKeyIdOrKeyArgs;
                    await expect(
                        resolver.getByIdOrKey(appKeyData)
                    ).resolves.toBeNull();
                })
            );
        });

        describe('Requesting a valid app key that exists returns the app key', () => {
            VALID_CASES.map(scenario => {
                it(scenario.it, async () => {
                    const appKeyData = scenario.data(
                        appKey
                    ) as AppKeyIdOrKeyArgs;
                    await expect(
                        resolver.getByIdOrKey(appKeyData)
                    ).resolves.toEqual(appKey);
                });
            });
        });
    });

    describe('METHOD: getByUserIdOrEmail', () => {
        describe('userIdOrEmail argument validation', () => {
            it('Throws an error when neither id or email are provided', async () => {
                const invalidArgs = {} as UserIdOrEmailArgs;
                await expect(
                    resolver.getByUserIdOrEmail(invalidArgs)
                ).rejects.toThrow(
                    'You provided an invalid argument for the where selector on User. Please provide exactly one unique field and value.'
                );
            });
        });

        const INVALID_CASES = [
            {
                it: 'on id',
                data: {
                    id: 'asdfasdfqwaeradsvsb54wbs'
                }
            },
            {
                it: 'on email',
                data: {
                    email: 'asdfadvaetgadfbvaedrtt@fasdf.com'
                }
            }
        ];

        const VALID_CASES = [
            {
                it: 'on id',
                data: user => ({
                    id: user.id
                })
            },
            {
                it: 'on email',
                data: user => ({
                    email: user.email
                })
            }
        ];

        describe("Requesting a valid app key that doesn't exist returns null", () => {
            INVALID_CASES.map(scenario =>
                it(scenario.it, async () => {
                    const userData = scenario.data as UserIdOrEmailArgs;
                    await expect(
                        resolver.getByUserIdOrEmail(userData)
                    ).resolves.toBeNull();
                })
            );
        });

        describe('Requesting an existing user will', () => {
            describe('With a stored app key will return the app key', () => {
                VALID_CASES.map(scenario =>
                    it(scenario.it, async () => {
                        const userData = scenario.data(
                            user
                        ) as UserIdOrEmailArgs;
                        await expect(
                            resolver.getByUserIdOrEmail(userData)
                        ).resolves.toEqual(appKey);
                    })
                );
            });

            describe('Without a stored app key will return null', () => {
                VALID_CASES.map(scenario =>
                    it(scenario.it, async () => {
                        const userData = scenario.data(
                            userWithoutAppKeys
                        ) as UserIdOrEmailArgs;
                        await expect(
                            resolver.getByUserIdOrEmail(userData)
                        ).resolves.toBeNull();
                    })
                );
            });
        });
    });

    describe('METHOD: getAllByUserIdOrEmail', () => {
        describe('UserIdOrEmail Args validation', () => {
            it('Throws an error when neither id or email are provided', async () => {
                const invalidArgs = {} as UserIdOrEmailArgs;
                await expect(
                    resolver.getAllByUserIdOrEmail(invalidArgs)
                ).rejects.toThrow(
                    'You provided an invalid argument for the where selector on User. Please provide exactly one unique field and value.'
                );
            });
        });

        const INVALID_CASES = [
            {
                it: 'on id',
                data: {
                    id: 'asdfvvvmo;iokek,,,flfllflfllf'
                }
            },
            {
                it: 'on email',
                data: {
                    email: 'shanananantestwser@asdfasdfasdf.com'
                }
            }
        ];

        describe("Requesting from a non existant user or user email that doesn't exist returns null", () => {
            INVALID_CASES.map(scenario =>
                it(scenario.it, async () => {
                    const userArgs = scenario.data as UserIdOrEmailArgs;

                    await expect(
                        resolver.getAllByUserIdOrEmail(userArgs)
                    ).resolves.toBeNull();
                })
            );
        });

        const VALID_CASES = [
            {
                it: 'on id',
                data: user => ({
                    id: user.id
                })
            },
            {
                it: 'on email',
                data: user => ({
                    email: user.email
                })
            }
        ];

        describe('Requesting from an existant user', () => {
            describe('Returns empty array for a user with no app keys', () => {
                VALID_CASES.map(scenario =>
                    it(scenario.it, async () => {
                        const userArgs = scenario.data(
                            userWithoutAppKeys
                        ) as UserIdOrEmailArgs;

                        await expect(
                            resolver.getAllByUserIdOrEmail(userArgs)
                        ).resolves.toHaveLength(0);
                    })
                );
            });
            describe('Returns an array of all keys for a user with app keys', () => {
                VALID_CASES.map(scenario =>
                    it(scenario.it, async () => {
                        const userArgs = scenario.data(
                            user
                        ) as UserIdOrEmailArgs;

                        await expect(
                            resolver.getAllByUserIdOrEmail(userArgs)
                        ).resolves.toHaveLength(1);
                    })
                );
            });
        });
    });
    const BASE_CREATE = (
        name: string,
        key: string,
        userIdOrEmai: UserIdOrEmailArgs
    ): AppKeyCreateInput => ({
        user: {
            connect: userIdOrEmai
        },
        key,
        name
    });

    describe('METHOD: create', () => {
        describe('CreateAppKey Argument Validation', () => {
            describe('User Validation', () => {
                describe('Non-existant users throw an error', () => {
                    const INVALID_USERS = [
                        {
                            it: 'on email',
                            data: {
                                email:
                                    'asdfasdffffmmmvvhjfdkfkg@asdfasdfasdf.com'
                            },
                            thrownError:
                                'No Node for the model User with value asdfasdffffmmmvvhjfdkfkg@asdfasdfasdf.com for email found.'
                        },
                        {
                            it: 'on id',
                            data: {
                                id:
                                    'asdfasdfnmmnfkoofhlasdfjhl23i4n23klj.4tndlfkjbn'
                            },
                            thrownError:
                                'No Node for the model User with value asdfasdfnmmnfkoofhlasdfjhl23i4n23klj.4tndlfkjbn for id found.'
                        }
                    ];
                    INVALID_USERS.map(scenario =>
                        it(scenario.it, async () => {
                            const createInput = BASE_CREATE(
                                'INVALID_KEY',
                                TEST_APP_KEY + 'asdfffdsa',
                                scenario.data as UserIdOrEmailArgs
                            );
                            await expect(
                                resolver.create(createInput)
                            ).rejects.toThrow(scenario.thrownError);
                        })
                    );
                });
            });
        });

        describe('Creating an AppKey', () => {
            const VALID = [
                {
                    it: 'connecting on user id',
                    data: user => ({ id: user.id }),
                    name: 'userIdConnection'
                },
                {
                    it: 'connecting on user email',
                    data: user => ({ email: user.email }),
                    name: 'userEmailConnection'
                }
            ];

            describe('Creates and returns an App Key successfully ', () => {
                VALID.map(scenario =>
                    it(scenario.it, async () => {
                        const key = TEST_APP_KEY + scenario.name;
                        const createInput = BASE_CREATE(
                            scenario.name,
                            key,
                            scenario.data(user)
                        );

                        await expect(
                            resolver.create(createInput)
                        ).resolves.toMatchObject({
                            key,
                            name: scenario.name
                        });
                    })
                );
            });
        });
    });

    describe('METHOD: deleteByIdOrKey', () => {
        let quickAppKeys = [];

        beforeAll(async () => {
            quickAppKeys.push(
                await resolver.create(
                    BASE_CREATE('somename', 'somekey', { id: user.id })
                )
            );
            quickAppKeys.push(
                await resolver.create(
                    BASE_CREATE('somename2', 'somekey2', { id: user.id })
                )
            );
        });

        const CASES = [
            {
                it: 'by id',
                data: appKey => ({
                    id: appKey.id
                })
            },
            {
                it: 'by key',
                data: appKey => ({
                    key: appKey.key
                })
            }
        ];

        CASES.map(scenario =>
            it(scenario.it, async () => {
                const key = quickAppKeys.pop();
                const deleteAppKeyArgs = scenario.data(
                    key
                ) as AppKeyIdOrKeyArgs;
                await expect(
                    resolver.deleteByIdOrKey(deleteAppKeyArgs)
                ).resolves.toEqual(key);
            })
        );
    });
});
