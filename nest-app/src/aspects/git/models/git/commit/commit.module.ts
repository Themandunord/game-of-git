import { Module } from '@nestjs/common';
import { CommitService } from './commit.service';
import { CommitController } from './commit.controller';
import { CommitResolver } from './commit.resolver';
import { PrismaModule } from '../../../../prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    providers: [CommitService, CommitResolver],
    controllers: [CommitController]
})
export class CommitModule {}
