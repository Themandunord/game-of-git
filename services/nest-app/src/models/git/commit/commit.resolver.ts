import {
  Resolver,
  Query,
  Args,
  Info,
  Mutation,
  Subscription
} from "@nestjs/graphql";
import { PrismaService } from "../../../prisma/prisma.service";
import { GitHubCommit } from "../../../prisma/prisma.binding";

@Resolver("Commit")
export class CommitResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query("gitHubCommits")
  async getGitHubCommits(@Args() args, @Info() info): Promise<GitHubCommit[]> {
    return await this.prisma.query.gitHubCommits(args, info);
  }

  @Query("gitHubCommit")
  async getGitHubCommit(@Args() args, @Info() info): Promise<GitHubCommit> {
    return await this.prisma.query.gitHubCommit(args, info);
  }

  @Mutation("createGitHubCommit")
  async createGitHubCommit(@Args() args, @Info() info): Promise<GitHubCommit> {
    return await this.prisma.mutation.createGitHubCommit(args, info);
  }

  @Mutation("updateGitHubCommit")
  async updateGitHubCommit(@Args() args, @Info() info): Promise<GitHubCommit> {
    return await this.prisma.mutation.updateGitHubCommit(args, info);
  }

  @Subscription()
  async gitHubCommit(@Args() args, @Info() info) {
    return await this.prisma.subscription.gitHubCommit(args, info);

    // TODO: switch to custo mimplementation instead of exposing backend
    // return pubSub.asyncIterator('gitHubWebhookEvent');
  }
}
