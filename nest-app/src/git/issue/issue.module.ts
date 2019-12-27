import { Module } from '@nestjs/common';
import { IssueService } from './issue.service';
import { IssueController } from './issue.controller';
import { IssueResolver } from './issue.resolver';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    providers: [IssueService, IssueResolver],
    controllers: [IssueController]
})
export class IssueModule {}
