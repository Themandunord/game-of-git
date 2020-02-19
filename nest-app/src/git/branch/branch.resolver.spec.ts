import { Test, TestingModule } from '@nestjs/testing';
import { BranchResolver } from './branch.resolver';

// const mockPrismaService = jest.genMockFromModule<PrismaService>(
//     '../../prisma/prisma.service'
// );

describe('BranchResolver', () => {
    let resolver: BranchResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [BranchResolver]
        }).compile();

        resolver = module.get<BranchResolver>(BranchResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
