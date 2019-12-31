import { Test, TestingModule } from '@nestjs/testing';
import { RepositoriesResolver } from './repositories.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from './../prisma/prisma.service';
import { GitClientModule } from '../git/client/git-client.module';
import ps from '../pubsub';

// Set all module functions to jest.fn
const prismaServiceMock = jest.mock('./../prisma/prisma.service');

describe('RepositoriesResolver', () => {
    let resolver: RepositoriesResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [PrismaModule, GitClientModule],
            providers: [
                RepositoriesResolver,
                {
                    provide: 'PUB_SUB',
                    useValue: ps
                }
            ]
        })
            .overrideProvider(PrismaService)
            .useValue(prismaServiceMock)
            .compile();

        resolver = module.get<RepositoriesResolver>(RepositoriesResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
