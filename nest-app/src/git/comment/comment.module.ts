import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { CommentResolver } from './comment.resolver';

@Module({
    providers: [CommentService, CommentResolver],
    controllers: [CommentController]
})
export class CommentModule {}
