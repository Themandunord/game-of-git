import { PrismaModule } from '../../prisma/prisma.module';
import { Test, TestingModule } from '@nestjs/testing';
import { FileDiffResolver } from './file-diff.resolver';
import { PrismaService } from '../../prisma/prisma.service';

const mockPrismaService = jest.genMockFromModule<PrismaService>(
    '../../../../prisma/prisma.service'
);

describe('FileDiffResolver', () => {
    let resolver: FileDiffResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [PrismaModule],
            providers: [FileDiffResolver]
        })
            .overrideProvider(PrismaService)
            .useValue(mockPrismaService)
            .compile();

        resolver = module.get<FileDiffResolver>(FileDiffResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
