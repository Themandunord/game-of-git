import { ReviewThreadModule } from "./../models/git/review-thread/review-thread.module";
import { TopicModule } from "./../models/git/topic/topic.module";
import { GraphqlOptions } from "./../graphql.options";
import { forwardRef, Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { AuthModule } from "../auth/auth.module";
import { GameModule } from "../game/game.module";
import { AppKeyModule } from "../git-client/app-key/app-key.module";
import { GitClientModule } from "../git-client/git-client.module";
import { PrismaModule } from "../prisma/prisma.module";
import { RepositoriesModule } from "../repositories/repositories.module";
import { UsersModule } from "../users/users.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "../models/git/user/user.module";
import { ReviewRequestModule } from "../models/git/review-request/review-request.module";
import { RepositoryModule } from "../models/git/repository/repository.module";
import { PullRequestReviewModule } from "../models/git/pull-request-review/pull-request-review.module";
import { PullRequestModule } from "../models/git/pull-request/pull-request.module";
import { LabelModule } from "../models/git/label/label.module";
import { IssueModule } from "../models/git/issue/issue.module";
import { FileDiffModule } from "../models/git/file-diff/file-diff.module";
import { CommitModule } from "../models/git/commit/commit.module";
import { CommentModule } from "../models/git/comment/comment.module";
import { BranchModule } from "../models/git/branch/branch.module";

@Module({
  imports: [
    // GraphQLModule.forRootAsync({
    // 	useClass: GraphqlOptions
    // }),
	GraphQLModule.forRoot({
      autoSchemaFile: './src/schema.graphql',
      debug: true,
      playground: true,
      context: ({ req }) => ({ req })
    }),
    PrismaModule,
    // forwardRef(() => AuthModule),
    // forwardRef(() => UsersModule),
    
	// AppKeyModule,
    // GitClientModule,
    // RepositoriesModule,
    // GameModule,

    // UserModule,
    // TopicModule,
    // ReviewThreadModule,
    // ReviewRequestModule,
    // RepositoryModule,
    // PullRequestReviewModule,
    // PullRequestModule,
    // LabelModule,
    // IssueModule,
    // FileDiffModule,
    // CommitModule,
    // CommentModule,
    // BranchModule
  ],
  controllers: [
	  AppController
	],
  providers: [
	  AppService
	  ]
})
export class AppModule {}
