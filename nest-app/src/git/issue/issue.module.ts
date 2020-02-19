import { Module } from '@nestjs/common';
import { IssueService } from './issue.service';
import { IssueController } from './issue.controller';
import { IssueResolver } from './issue.resolver';

@Module({
    providers: [IssueService, IssueResolver],
    controllers: [IssueController]
})
export class IssueModule {}
