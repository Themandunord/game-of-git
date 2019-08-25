import { PrismaModule } from '../../../../prisma/prisma.module';
import { Test, TestingModule } from '@nestjs/testing';
import { IssueResolver } from './issue.resolver';
import { PrismaService } from '../../../../prisma/prisma.service';
const mockPrismaService = jest.genMockFromModule<PrismaService>(
    '../../../../prisma/prisma.service'
);

describe('IssueResolver', () => {
    let resolver: IssueResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [PrismaModule],
            providers: [IssueResolver]
        })
            .overrideProvider(PrismaService)
            .useValue(mockPrismaService)
            .compile();

        resolver = module.get<IssueResolver>(IssueResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
