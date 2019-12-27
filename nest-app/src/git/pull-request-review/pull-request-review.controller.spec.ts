import { Test, TestingModule } from '@nestjs/testing';
import { PullRequestReviewController } from './pull-request-review.controller';

describe('PullRequestReview Controller', () => {
    let controller: PullRequestReviewController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PullRequestReviewController]
        }).compile();

        controller = module.get<PullRequestReviewController>(
            PullRequestReviewController
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
