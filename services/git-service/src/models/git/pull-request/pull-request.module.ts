import { Module } from '@nestjs/common';
import { PullRequestService } from './pull-request.service';
import { PullRequestController } from './pull-request.controller';
import { PullRequestResolver } from './pull-request.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
	imports: [PrismaModule],
	providers: [PullRequestService, PullRequestResolver],
	controllers: [PullRequestController]
})
export class PullRequestModule {}
