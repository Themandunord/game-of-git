import { PrismaService } from './../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { RepositoryResolver } from './repository.resolver';
import { PrismaModule } from '../../../../prisma/prisma.module';

const mockPrismaService = jest.genMockFromModule<PrismaService>(
    '../../../../prisma/prisma.service'
);

describe('RepositoryResolver', () => {
    let resolver: RepositoryResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [PrismaModule],
            providers: [RepositoryResolver]
        })
            .overrideProvider(PrismaService)
            .useValue(mockPrismaService)
            .compile();

        resolver = module.get<RepositoryResolver>(RepositoryResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
