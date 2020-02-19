import { Module } from '@nestjs/common';
import { TopicController } from './topic.controller';
import { TopicResolver } from './topic.resolver';
import { TopicService } from './topic.service';

@Module({
    controllers: [TopicController],
    providers: [TopicResolver, TopicService]
})
export class TopicModule {}
