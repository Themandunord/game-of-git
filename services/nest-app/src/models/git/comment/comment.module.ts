import { Module } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { CommentController } from "./comment.controller";
import { CommentResolver } from "./comment.resolver";
import { PrismaModule } from "../../../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  providers: [CommentService, CommentResolver],
  controllers: [CommentController]
})
export class CommentModule {}
