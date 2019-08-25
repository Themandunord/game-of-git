import { Module } from '@nestjs/common';
import { PullRequestReviewService } from './pull-request-review.service';
import { PullRequestReviewController } from './pull-request-review.controller';
import { PullRequestReviewResolver } from './pull-request-review.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
	imports: [PrismaModule],
	providers: [PullRequestReviewService, PullRequestReviewResolver],
	controllers: [PullRequestReviewController]
})
export class PullRequestReviewModule {}
