import { Module } from '@nestjs/common';
import { PullRequestReviewService } from './pull-request-review.service';
import { PullRequestReviewController } from './pull-request-review.controller';
import { PullRequestReviewResolver } from './pull-request-review.resolver';

@Module({
    providers: [PullRequestReviewService, PullRequestReviewResolver],
    controllers: [PullRequestReviewController],
    exports: [PullRequestReviewService]
})
export class PullRequestReviewModule {}
