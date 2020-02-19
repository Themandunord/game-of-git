import { Module } from '@nestjs/common';
import { PullRequestService } from './pull-request.service';
import { PullRequestController } from './pull-request.controller';
import { PullRequestResolver } from './pull-request.resolver';

@Module({
    providers: [PullRequestService, PullRequestResolver],
    controllers: [PullRequestController]
})
export class PullRequestModule {}
