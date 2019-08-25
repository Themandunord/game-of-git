import {
  Resolver,
  Query,
  Args,
  Info,
  Mutation,
  Subscription
} from "@nestjs/graphql";
import { GitHubLabel } from "./../../../prisma/prisma.binding";
import { PrismaService } from "../../../prisma/prisma.service";

@Resolver("Issue")
export class IssueResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query("gitHubIssues")
  async getGitHubIssues(@Args() args, @Info() info): Promise<GitHubLabel[]> {
    return await this.prisma.query.gitHubIssues(args, info);
  }

  @Query("gitHubIssue")
  async getGitHubIssue(@Args() args, @Info() info): Promise<GitHubLabel> {
    return await this.prisma.query.gitHubIssue(args, info);
  }

  @Mutation("createGitHubIssue")
  async createGitHubIssue(@Args() args, @Info() info): Promise<GitHubLabel> {
    return await this.prisma.mutation.createGitHubIssue(args, info);
  }

  @Mutation("updateGitHubIssue")
  async updateGitHubLabel(@Args() args, @Info() info): Promise<GitHubLabel> {
    return await this.prisma.mutation.updateGitHubIssue(args, info);
  }

  @Subscription()
  async gitHubIssue(@Args() args, @Info() info) {
    return await this.prisma.subscription.gitHubIssue(args, info);

    // TODO: switch to custo mimplementation instead of exposing backend
    // return pubSub.asyncIterator('gitHubWebhookEvent');
  }
}
