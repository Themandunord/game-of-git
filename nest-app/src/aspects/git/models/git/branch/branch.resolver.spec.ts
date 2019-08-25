import { PrismaModule } from './../../../../prisma/prisma.module';
import { PrismaService } from './../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { BranchResolver } from './branch.resolver';

const mockPrismaService = jest.genMockFromModule<PrismaService>(
    '../../../prisma/prisma.service'
);

describe('BranchResolver', () => {
    let resolver: BranchResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [PrismaModule],
            providers: [BranchResolver]
        })
            .overrideProvider(PrismaService)
            .useValue(mockPrismaService)
            .compile();

        resolver = module.get<BranchResolver>(BranchResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
