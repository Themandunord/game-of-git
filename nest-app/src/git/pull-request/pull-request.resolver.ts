import {
    Resolver,
    Query,
    Args,
    Info,
    Mutation,
    Subscription
} from '@nestjs/graphql';
import { PrismaService } from '../../prisma/prisma.service';
import { GitHubPullRequest } from '../../models/github/pull-request';
@Resolver(of => GitHubPullRequest)
export class PullRequestResolver {
    constructor(private readonly prisma: PrismaService) {}

    // @Query('gitHubPullRequests')
    // async getGitHubPullRequests(
    //     @Args() args,
    //     @Info() info
    // ): Promise<GitHubPullRequest[]> {
    //     return await this.prisma.query.gitHubPullRequests(args, info);
    // }

    // @Query('gitHubPullRequest')
    // async getGitHubPullRequest(
    //     @Args() args,
    //     @Info() info
    // ): Promise<GitHubPullRequest> {
    //     return await this.prisma.query.gitHubPullRequest(args, info);
    // }

    // @Mutation('createGitHubPullRequest')
    // async createGitHubPullRequest(
    //     @Args() args,
    //     @Info() info
    // ): Promise<GitHubPullRequest> {
    //     return await this.prisma.mutation.createGitHubPullRequest(args, info);
    // }

    // @Mutation('updateGitHubPullRequest')
    // async updateGitHubPullRequest(
    //     @Args() args,
    //     @Info() info
    // ): Promise<GitHubPullRequest> {
    //     return await this.prisma.mutation.updateGitHubPullRequest(args, info);
    // }

    // @Subscription()
    // async gitHubPullRequest(@Args() args, @Info() info) {
    //     return await this.prisma.subscription.gitHubPullRequest(args, info);

    //     // TODO: switch to custo mimplementation instead of exposing backend
    //     // return pubSub.asyncIterator('gitHubWebhookEvent');
    // }
}
