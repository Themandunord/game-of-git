import { Module } from '@nestjs/common';
import { ReviewThreadService } from './review-thread.service';
import { ReviewThreadController } from './review-thread.controller';
import { ReviewThreadResolver } from './review-thread.resolver';
import { PrismaModule } from '../../../../prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    providers: [ReviewThreadService, ReviewThreadResolver],
    controllers: [ReviewThreadController]
})
export class ReviewThreadModule {}
