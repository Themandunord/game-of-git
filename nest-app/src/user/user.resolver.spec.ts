import { User } from '@game-of-git/common';
import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import ps from '../pubsub';
import { createOrRetrieveUser } from '../utilities/user.prisma';
import { UserResolver } from './user.resolver';
import { USER_MUTATED_EVENT_NAME } from './user.internal.resolver';

type Me = {
    name: string | null;
    updatedAt: string;
    email: string;
    role: string;
    id: string;
    createdAt: string;
    gitLogin: string;
    password: string;
    appKeys: any[];
};

const sampleMe: Me = {
    name: null,
    updatedAt: '2020-01-01T17:53:34.608Z',
    email: 'someTestEmail@gmail.com',
    role: 'ADMIN',
    id: 'ck4vln5ao03vz0759tu7akjw6',
    createdAt: '2020-01-01T17:53:34.608Z',
    gitLogin: 'test',
    password: '$2b$10$MhgPoOhrJwurVTfyfYYA3.tPMhhfYAtj9B0F1q7eAeTVDmIQH5MSC',
    appKeys: []
};

describe('UserResolver', () => {
    let resolver: UserResolver;
    let prisma: PrismaService;
    let user = null;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [PrismaModule],
            providers: [
                UserResolver,
                {
                    provide: 'PUB_SUB',
                    useValue: ps
                }
            ]
        }).compile();

        resolver = module.get<UserResolver>(UserResolver);
        prisma = module.get<PrismaService>(PrismaService);

        user = await createOrRetrieveUser(prisma);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });

    describe('METHOD: me', () => {
        // TODO: E2E Auth Guard Tests
        let matchingScenarios;

        describe('Returns a user that matches', () => {
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

            CASES.map(scenario =>
                it(scenario.it, async () => {
                    const userData = scenario.data(user) as User;
                    const userReturned = await resolver.me(userData);

                    expect(userReturned).toMatchObject<Me>({
                        ...sampleMe,
                        createdAt: user.createdAt,
                        updatedAt: user.updatedAt,
                        password: user.password,
                        id: user.id
                    });
                })
            );
        });

        it('Throws NotFoundException if there is no matching user id', async () => {
            const userData = {
                id: 'asdfasdfasdferwerwer'
            } as User;

            await expect(resolver.me(userData)).rejects.toThrowError(
                NotFoundException
            );
        });
    });
});
