import {
    Resolver,
    Query,
    Args,
    Info,
    Mutation,
    Subscription
} from '@nestjs/graphql';

import { GitHubPullRequestReview } from '@game-of-git/common';
@Resolver(of => GitHubPullRequestReview)
export class PullRequestReviewResolver {
    constructor() {}

    // @Query('gitHubPullRequestReviews')
    // async getGitHubPullRequestReviews(
    //     @Args() args,
    //     @Info() info
    // ): Promise<GitHubPullRequestReview[]> {
    //     return await this.prisma.query.gitHubCommits(args, info);
    // }

    // @Query('gitHubPullRequestReview')
    // async getGitHubPullRequestReview(
    //     @Args() args,
    //     @Info() info
    // ): Promise<GitHubPullRequestReview> {
    //     return await this.prisma.query.gitHubCommit(args, info);
    // }

    // @Mutation('createGitHubPullRequestReview')
    // async createGitHubPullRequestReview(
    //     @Args() args,
    //     @Info() info
    // ): Promise<GitHubPullRequestReview> {
    //     return await this.prisma.mutation.createGitHubPullRequestReview(
    //         args,
    //         info
    //     );
    // }

    // @Mutation('updateGitHubPullRequestReview')
    // async updateGitHubPullRequestReview(
    //     @Args() args,
    //     @Info() info
    // ): Promise<GitHubPullRequestReview> {
    //     return await this.prisma.mutation.updateGitHubPullRequestReview(
    //         args,
    //         info
    //     );
    // }

    // @Subscription()
    // async gitHubPullRequestReview(@Args() args, @Info() info) {
    //     return await this.prisma.subscription.gitHubPullRequestReview(
    //         args,
    //         info
    //     );

    //     // TODO: switch to custo mimplementation instead of exposing backend
    //     // return pubSub.asyncIterator('gitHubWebhookEvent');
    // }
}
