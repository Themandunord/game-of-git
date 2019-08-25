import { Test, TestingModule } from '@nestjs/testing';
import { ReviewRequestResolver } from './review-request.resolver';
import { PrismaService } from '../../../../prisma/prisma.service';
import { PrismaModule } from '../../../../prisma/prisma.module';
const mockPrismaService = jest.genMockFromModule<PrismaService>(
    '../../../..prisma/prisma.service'
);

describe('ReviewRequestResolver', () => {
    let resolver: ReviewRequestResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [PrismaModule],
            providers: [ReviewRequestResolver]
        })
            .overrideProvider(PrismaService)
            .useValue(mockPrismaService)
            .compile();

        resolver = module.get<ReviewRequestResolver>(ReviewRequestResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
