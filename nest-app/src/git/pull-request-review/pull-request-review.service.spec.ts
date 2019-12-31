import { PullRequestReviewResolver } from './pull-request-review.resolver';
import { PullRequestReviewModule } from './pull-request-review.module';
import { Test, TestingModule } from '@nestjs/testing';
import { PullRequestReviewService } from './pull-request-review.service';
import { PrismaService } from '../../prisma/prisma.service';
import { PrismaModule } from '../../prisma/prisma.module';

const mockPrismaService = jest.genMockFromModule<PrismaService>(
    '../../prisma/prisma.service'
);

describe('PullRequestReviewService', () => {
    let service: PullRequestReviewService;
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [PrismaModule],
            providers: [PullRequestReviewService]
        })
            .overrideProvider(PrismaService)
            .useValue(mockPrismaService)
            .compile();

        service = module.get<PullRequestReviewService>(
            PullRequestReviewService
        );
    });

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PullRequestReviewService]
        }).compile();

        service = module.get<PullRequestReviewService>(
            PullRequestReviewService
        );
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
