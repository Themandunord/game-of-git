import { PrismaModule } from '../../prisma/prisma.module';
import { Test, TestingModule } from '@nestjs/testing';
import { CommentResolver } from './comment.resolver';
import { PrismaService } from '../../prisma/prisma.service';
const mockPrismaService = jest.genMockFromModule<PrismaService>(
    '../../../prisma/prisma.service'
);

describe('CommentResolver', () => {
    let resolver: CommentResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [PrismaModule],
            providers: [CommentResolver]
        })
            .overrideProvider(PrismaService)
            .useValue(mockPrismaService)
            .compile();

        resolver = module.get<CommentResolver>(CommentResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
