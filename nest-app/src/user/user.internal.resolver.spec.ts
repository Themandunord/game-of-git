import { PrismaModule } from '../prisma/prisma.module';
import { Test, TestingModule } from '@nestjs/testing';
import { UserInternalResolver } from './user.internal.resolver';
import { PrismaService } from '../prisma/prisma.service';
import { UserIdOrEmailArgs, User } from '@game-of-git/common';
import {
    NotFoundException,
    UnprocessableEntityException
} from '@nestjs/common';
import { createOrRetrieveUser } from '../utilities/user.prisma';

const INVALID_INPUT_SCENARIOS = [
    {
        it: `Fails when missing both email and id`,
        value: {},
        exception: UnprocessableEntityException
    }
];

describe('UserInternalResolver', () => {
    let resolver: UserInternalResolver;
    let prisma: PrismaService;
    let user;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [PrismaModule],
            providers: [UserInternalResolver]
        }).compile();

        resolver = module.get<UserInternalResolver>(UserInternalResolver);
        prisma = module.get<PrismaService>(PrismaService);
        user = await createOrRetrieveUser(prisma);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });

    describe('METHOD: getByIdOrEmail', () => {
        describe('Input validation exceptions', () => {
            INVALID_INPUT_SCENARIOS.map(scenario =>
                it(scenario.it, () => {
                    expect(
                        resolver.getByIdOrEmail(
                            scenario.value as UserIdOrEmailArgs
                        )
                    ).rejects.toThrowError(scenario.exception);
                })
            );
        });

        describe('User Retrieval', () => {
            const CASES = [
                {
                    it: 'on id',
                    data: user => ({ id: user.id })
                },
                {
                    it: 'on email',
                    data: user => ({ email: user.email })
                }
            ];
            describe('Throws a NotFoundException if there was no match', () => {
                const invalidUser = {
                    email: 'indvalidEmail',
                    id: 'asdfasdfasdfasdf'
                };
                CASES.map(scenario =>
                    it(scenario.it, async () => {
                        const userData = scenario.data(invalidUser) as User;
                        await expect(
                            resolver.getByIdOrEmail(userData)
                        ).rejects.toThrowError(NotFoundException);
                    })
                );
            });

            describe('Returns the user when it matches email or ids args', () => {
                CASES.map(scenario =>
                    it(scenario.it, async () => {
                        const userData = scenario.data(user) as User;
                        await expect(
                            resolver.getByIdOrEmail(userData)
                        ).resolves.toMatchObject(user);
                    })
                );
            });
        });
    });
});
