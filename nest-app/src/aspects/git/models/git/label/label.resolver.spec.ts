import { PrismaService } from '../../../../prisma/prisma.service';
import { PrismaModule } from './../../../../prisma/prisma.module';
import { Test, TestingModule } from '@nestjs/testing';
import { LabelResolver } from './label.resolver';
const mockPrismaService = jest.genMockFromModule<PrismaService>(
    '../../../../prisma/prisma.service'
);

describe('LabelResolver', () => {
    let resolver: LabelResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [PrismaModule],
            providers: [LabelResolver]
        })
            .overrideProvider(PrismaService)
            .useValue(mockPrismaService)
            .compile();

        resolver = module.get<LabelResolver>(LabelResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
