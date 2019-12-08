import { Module } from '@nestjs/common';
import { TopicController } from './topic.controller';
import { TopicResolver } from './topic.resolver';
import { TopicService } from './topic.service';
import { PrismaModule } from '../../../../prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [TopicController],
    providers: [TopicResolver, TopicService]
})
export class TopicModule {}
