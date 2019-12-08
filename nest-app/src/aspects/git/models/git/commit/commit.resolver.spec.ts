import { Test, TestingModule } from '@nestjs/testing';
import { CommitResolver } from './commit.resolver';
import { PrismaService } from '../../../../prisma/prisma.service';
import { PrismaModule } from '../../../../prisma/prisma.module';

const mockPrismaService = jest.genMockFromModule<PrismaService>(
    '../../../../prisma/prisma.service'
);

describe('CommitResolver', () => {
    let resolver: CommitResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [PrismaModule],
            providers: [CommitResolver]
        })
            .overrideProvider(PrismaService)
            .useValue(mockPrismaService)
            .compile();

        resolver = module.get<CommitResolver>(CommitResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
