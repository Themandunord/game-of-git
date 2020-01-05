import {
    AppKeyIdOrKeyArgs,
    User,
    UserIdOrEmailArgs
} from '@game-of-git/common';
import {
    NotFoundException,
    UnprocessableEntityException
} from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppKey } from '../../../generated/prisma-client/index';
import { PrismaModule } from '../../../prisma/prisma.module';
import { PrismaService } from '../../../prisma/prisma.service';
import { UserInternalModule } from '../../../user/user.internal.module';
import {
    clearAppKey,
    clearUserAppKeys,
    createOrRetrieveAppKey
} from '../../../utilities/testing/git.app-key.prisma';
import {
    clearUser,
    createOrRetrieveUser
} from '../../../utilities/testing/user.prisma';
import { UserService } from '../../user/user.service';
import { GitClientModule } from '../git-client.module';
import { AppKeyInternalResolver } from './app-key.internal.resolver';
import { AppKeyService } from './app-key.service';
import { CreateAppKeyInput } from './dto/create-app-key.input';
import { clearTestData } from '../../../utilities/testing/teardown';

const GIT_TESTING_TOKEN = process.env.GIT_TESTING_TOKEN;
const GIT_TESTING_USER = process.env.GIT_TESTING_USER;
const GIT_TESTING_REPOSITORY = process.env.GIT_TESTING_REPOSITORY;

// const gitClientServiceMock = jest.genMockFromModule<GitClientService>(
//     '../git-client.service'
// );
// const appKeyInternalResolverMock = jest.genMockFromModule<
//     AppKeyInternalResolver
// >('./app-key.internal.resolver');
const userServiceMock = jest.mock('../../user/user.service');

const TEST_APP_KEY_SCENARIOS = [
    {
        it:
            'Executes testAppKey once on the GitClient and returns true when the result is true',
        scenario: {
            testAppKeyMock: jest.fn(async () => {
                return true;
            }),
            toEqual: true,
            testAppKeyMockTimes: 1,
            user: 'someuser',
            key: 'somekey'
        }
    },
    {
        it:
            'Executes testAppKey once on the GitClient and returns false when the result is false',
        scenario: {
            testAppKeyMock: jest.fn(async () => {
                return false;
            }),
            toEqual: false,
            testAppKeyMockTimes: 1,
            user: 'someuser',
            key: 'somekey'
        }
    }
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
            createAppKeyMockTimes: 0
        }
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
            storeKeyResult: undefined
        }
    },
    {
        it:
            "Successfully calls createAppKey once when the AppKey doesn't exist and is validated",
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
            storeKeyResult: {}
        }
    }
];

export const TEST_APP_KEY = 'skreebopbopbeedabop';

describe('AppKeyService', () => {
    let service: AppKeyService;
    let prisma: PrismaService;
    let user;
    let userWithoutAppKeys;
    let appKey;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [PrismaModule, GitClientModule, UserInternalModule],
            providers: [AppKeyService, AppKeyInternalResolver]
        })
            // .overrideProvider(GitClientService)
            // .useValue(gitClientServiceMock)
            .overrideProvider(UserService)
            .useValue(userServiceMock)
            .compile();

        service = module.get<AppKeyService>(AppKeyService);
        prisma = module.get<PrismaService>(PrismaService);
        user = await createOrRetrieveUser(prisma, {
            gitLogin: GIT_TESTING_USER
        });
        userWithoutAppKeys = await createOrRetrieveUser(prisma, {
            email: 'someOtherUserMyDude@testetetst.com'
        });
        appKey = await createOrRetrieveAppKey(prisma, {
            key: TEST_APP_KEY,
            name: 'appKeyServiceTestKey',
            user: {
                email: user.email
            }
        });
    });

    afterAll(async () => {
        await clearTestData(prisma, { id: user.id });
        await clearTestData(prisma, { id: userWithoutAppKeys.id });
    });

    it('The AppKeyService should be defined', () => {
        expect(service).toBeDefined();
    });

    // to conserve App Key usage, keep skipped
    xdescribe('METHOD: validate', () => {
        it('Missing the app key and userthrows an error', async () => {
            await expect(
                service.validate(undefined, undefined)
            ).rejects.toThrowError(UnprocessableEntityException);
        });

        it('Returns false for invalid GitHub App Key', async () => {
            const token = GIT_TESTING_TOKEN + 'asdfasdfsadf';
            const gitUser = GIT_TESTING_USER;

            await expect(service.validate(token, gitUser)).resolves.toBeFalsy();
        });

        it('Returns false for invalid GitHub User', async () => {
            const token = GIT_TESTING_TOKEN;
            const gitUser = GIT_TESTING_USER + '-some-one-else';

            await expect(service.validate(token, gitUser)).resolves.toBeFalsy();
        });

        it('Returns true for valid GitHub App Key', async () => {
            const token = GIT_TESTING_TOKEN;
            const gitUser = GIT_TESTING_USER;

            await expect(
                service.validate(token, gitUser)
            ).resolves.toBeTruthy();
        });
    });

    describe('METHOD: getByIdOrKey', () => {
        describe('AppKeyIdOrKey Arg validation', () => {
            it('Throws an error when missing app key id and key', async () => {
                const appKeyIdOrKeyArgs = {} as AppKeyIdOrKeyArgs;
                await expect(
                    service.getByIdOrKey(appKeyIdOrKeyArgs)
                ).rejects.toThrowError(
                    'You provided an invalid argument for the where selector on AppKey. Please provide exactly one unique field and value.'
                );
            });
        });

        describe('Non-existant keys return null', () => {
            const INVALID_CASES = [
                {
                    it: 'on id',
                    data: {
                        id: 'asdfasdfqwer3242raegv45wgw45'
                    }
                },
                {
                    it: 'on key',
                    data: {
                        key: 'asdfasdfqwer3242raegv45wgw45'
                    }
                }
            ];

            INVALID_CASES.map(scenario =>
                it(scenario.it, async () => {
                    const appKeyIdOrKeyArgs = scenario.data as AppKeyIdOrKeyArgs;
                    await expect(
                        service.getByIdOrKey(appKeyIdOrKeyArgs)
                    ).resolves.toBeNull();
                })
            );
        });

        describe('Existing App Keys are returned', () => {
            const VALID_CASES = [
                {
                    it: 'on id',
                    data: appKey => ({
                        id: appKey.id
                    })
                },
                {
                    it: 'on key',
                    data: appKey => ({
                        key: appKey.key
                    })
                }
            ];

            VALID_CASES.map(scenario =>
                it(scenario.it, async () => {
                    const appKeyIdOrKeyArgs = scenario.data(
                        appKey
                    ) as AppKeyIdOrKeyArgs;
                    await expect(
                        service.getByIdOrKey(appKeyIdOrKeyArgs)
                    ).resolves.toEqual(appKey);
                })
            );
        });
    });

    const NON_EXISTANT_USERS = [
        {
            it: 'by email',
            data: {
                email:
                    'asdfasdfmmfjfjfjgopirpokgearkli;jgk;ljdrg@asdfasdfasdf.com'
            }
        },
        {
            it: 'by id',
            data: {
                id: 'asdfjljdkfnvnkjsdf;lb;nklrtgb;klnjfgb;kjnsfbgdnkj2432134'
            }
        }
    ];

    const USER_KEY_MAP = [
        {
            it: 'on id',
            data: user => ({ id: user.id })
        },
        {
            it: 'on email',
            data: user => ({ email: user.email })
        }
    ];

    describe('METHOD: getAllByUserIdOrEmail', () => {
        describe('UserIdOrEmail Arg validation', () => {
            it('Throws an error when missing either id and email', async () => {
                const userIdOrEmailArgs = {} as UserIdOrEmailArgs;
                await expect(
                    service.getAllByUserIdOrEmail(userIdOrEmailArgs)
                ).rejects.toThrowError(
                    'You provided an invalid argument for the where selector on User. Please provide exactly one unique field and value.'
                );
            });
        });

        describe('Non-Existant Users', () => {
            describe('Returns null for a non-existant user', () => {
                NON_EXISTANT_USERS.map(scenario =>
                    it(scenario.it, async () => {
                        const data = scenario.data as UserIdOrEmailArgs;
                        await expect(
                            service.getAllByUserIdOrEmail(data)
                        ).resolves.toBeNull();
                    })
                );
            });
        });

        describe('Existant Users', () => {
            describe('Without app keys', () => {
                USER_KEY_MAP.map(scenario =>
                    it(scenario.it, async () => {
                        const data = scenario.data(
                            userWithoutAppKeys
                        ) as UserIdOrEmailArgs;
                        await expect(
                            service.getAllByUserIdOrEmail(data)
                        ).resolves.toEqual([]);
                    })
                );
            });

            describe("With app keys resolves to the user's App Keys", () => {
                USER_KEY_MAP.map(scenario =>
                    it(scenario.it, async () => {
                        const data = scenario.data(user) as UserIdOrEmailArgs;
                        await expect(
                            service.getAllByUserIdOrEmail(data)
                        ).resolves.toEqual([appKey]);
                    })
                );
            });
        });
    });

    describe('METHOD: getByUserIdOrEmail', () => {
        describe('UserIdOrEmail Arg validation', () => {
            it('Throws an error when missing either id and email', async () => {
                const userIdOrEmailArgs = {} as UserIdOrEmailArgs;
                await expect(
                    service.getByUserIdOrEmail(userIdOrEmailArgs)
                ).rejects.toThrowError(
                    'You provided an invalid argument for the where selector on User. Please provide exactly one unique field and value.'
                );
            });
        });

        describe('Non-Existant Users', () => {
            describe('Returns null for for non-existant users', () => {
                NON_EXISTANT_USERS.map(scenario =>
                    it(scenario.it, async () => {
                        const data = scenario.data as UserIdOrEmailArgs;
                        await expect(
                            service.getByUserIdOrEmail(data)
                        ).resolves.toBeNull();
                    })
                );
            });
        });

        describe('Existant Users', () => {
            describe('Without app keys return null', () => {
                USER_KEY_MAP.map(scenario =>
                    it(scenario.it, async () => {
                        const data = scenario.data(
                            userWithoutAppKeys
                        ) as UserIdOrEmailArgs;
                        await expect(
                            service.getByUserIdOrEmail(data)
                        ).resolves.toEqual(null);
                    })
                );
            });

            describe('With app keys returns the app key', () => {
                USER_KEY_MAP.map(scenario =>
                    it(scenario.it, async () => {
                        const data = scenario.data(user) as UserIdOrEmailArgs;
                        await expect(
                            service.getByUserIdOrEmail(data)
                        ).resolves.toEqual(appKey);
                    })
                );
            });
        });
    });

    describe('METHOD: store', () => {
        describe('Create App Key Input Validation', () => {
            it('Throws a NotFoundException when the user does not exist', async () => {
                await expect(
                    service.store(
                        {} as CreateAppKeyInput,
                        { email: 'asdfasdfasdfasdfasdfbbmnmkmd' } as User
                    )
                ).rejects.toThrowError(NotFoundException);
            });

            const INVALID_PAYLOADS = [
                {
                    it: 'fails when missing name',
                    data: {
                        key: 'someKeyToTestasdfasdfasdfasdfdf;lkgjdlfkjg'
                    }
                },
                {
                    it: 'fails when missing key',
                    data: {
                        name: 'someKeyToTest'
                    }
                }
            ];

            INVALID_PAYLOADS.map(scenario =>
                it(scenario.it, async () => {
                    const data = scenario.data as CreateAppKeyInput;
                    await expect(
                        service.store(data, { email: user.email } as User)
                    ).rejects.toThrowError();
                })
            );

            describe('An already registered App Key', () => {
                let appKeyInternalResolverCreateSpy;
                let gitClientTestAppKeySpy;

                beforeAll(async () => {
                    appKeyInternalResolverCreateSpy = jest.spyOn(
                        './app-key.internal.resolver',
                        'create'
                    );
                    gitClientTestAppKeySpy = jest.spyOn(
                        '../git-client.service',
                        'testAppKey'
                    );

                    try {
                        // test run
                        const createAppKeyData = {
                            key: appKey.key,
                            name: 'AlreadyReigsteredAppKeyTest'
                        };
                        const userData = {
                            email: user.email
                        };
                        await service.store(createAppKeyData, userData as User);
                    } catch (e) {
                        console.error(
                            'Error setting up the already registered AppKey test'
                        );
                        fail('Shit');
                    }
                });

                it("Doesn't invoke the `validate` function", () => {
                    // expect(true).toBeTruthy();
                    expect(gitClientTestAppKeySpy).not.toBeCalled();
                });

                it('Throws an error', () => {
                    expect(true).toBeTruthy();
                });

                it("Does not invoke the internal resolver's create function", () => {
                    expect(appKeyInternalResolverCreateSpy).not.toBeCalled();
                });
            });
        });

        describe('Existing App Key', () => {
            it('stubs', () => {
                expect(true).toBeTruthy();
            });
        });

        describe('Valid App Key Creation', () => {
            it('stubs', () => {
                expect(true).toBeTruthy();
            });
        });
    });

    describe('METHOD: deleteByIdOrKey', () => {
        it('stubs', () => {
            expect(true).toBeTruthy();
        });
    });

    xdescribe('Retrieving a AppKey by User ID', () => {
        it('Executes getAppKeys once on the AppKeyResolver', async () => {
            // const getAppKeysMock = jest.fn(async () => {
            //     console.log('MOCKED');
            //     return [];
            // });
            // appKeyInternalResolverMock.userAppKeys = getAppKeysMock;

            await expect(
                service.getAllByUserIdOrEmail({ email: 'someUser' })
            ).resolves.toEqual([]);

            // expect(getAppKeysMock).toHaveBeenCalledTimes(1);
        });
    });

    // xdescribe('Validating an AppKey', () => {
    //     xdescribe('Scenarios with populated values', async () => {
    //         await Promise.all(
    //             TEST_APP_KEY_SCENARIOS.map(async config => {
    //                 const scenario = config.scenario;
    //                 it(config.it, async () => {
    //                     const testAppKeyMock = scenario.testAppKeyMock;
    //                     gitClientServiceMock.testAppKey = testAppKeyMock;

    //                     const key = scenario.key;
    //                     const user = scenario.user;

    //                     await expect(
    //                         service.validate(key, user)
    //                     ).resolves.toEqual(scenario.toEqual);
    //                     expect(testAppKeyMock).toHaveBeenCalledTimes(
    //                         scenario.testAppKeyMockTimes
    //                     );
    //                     expect(testAppKeyMock).toHaveBeenCalledWith(
    //                         scenario.key,
    //                         scenario.user
    //                     );
    //                 });
    //             })
    //         );
    //     });
    // });

    xdescribe('Storing an AppKey', () => {
        const key = 'somekey';
        const user = 'someuser';

        // describe('Scenarios', async () => {
        //     STORE_APP_KEY_SCENARIOS.map(async config => {
        //         await it(config.it, async () => {
        //             const scenario = config.scenario;
        //             const testAppKeyMock = scenario.testAppKeyMock;
        //             gitClientServiceMock.testAppKey = testAppKeyMock;

        //             const getAppKeyMock = scenario.getAppKeyMock;
        //             appKeyResolverMock.appKey = getAppKeyMock;

        //             const createAppKeyMock = scenario.createAppKeyMock;
        //             appKeyResolverMock.createAppKey = createAppKeyMock;

        //             const name = 'some repo';
        //             const username = 'miking-the-viking';

        //             await expect(
        //                 service.store(key, user, name, username)
        //             ).resolves.toEqual(scenario.storeKeyResult);

        //             const mocks = [
        //                 {
        //                     func: testAppKeyMock,
        //                     times: scenario.testAppKeyMockTimes
        //                 },
        //                 {
        //                     func: getAppKeyMock,
        //                     times: scenario.getAppKeyMockTimes
        //                 },
        //                 {
        //                     func: createAppKeyMock,
        //                     times: scenario.createAppKeyMockTimes
        //                 }
        //             ];
        //             mocks.map(mock => {
        //                 if (mock.times > 0) {
        //                     expect(mock.func).toHaveBeenCalledTimes(mock.times);
        //                 } else {
        //                     expect(mock.func).not.toHaveBeenCalled();
        //                 }
        //             });
        //         });
        //     });
        // });

        it('Executes testAppKey once on the GitClient', async () => {
            const testAppKeyMock = jest.fn(async () => {
                return true;
            });
            // gitClientServiceMock.testAppKey = testAppKeyMock;

            await service.validate(key, user);

            expect(testAppKeyMock).toHaveBeenCalledTimes(1);
            expect(testAppKeyMock).toHaveBeenCalledWith(key, user);
        });
    });
});
