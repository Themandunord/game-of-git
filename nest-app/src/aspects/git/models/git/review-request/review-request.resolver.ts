import {
    Resolver,
    Query,
    Args,
    Info,
    Mutation,
    Subscription
} from '@nestjs/graphql';
import { PrismaService } from '../../../../prisma/prisma.service';
import { GitHubReviewRequest } from './../../../../../models/github/review-request';
@Resolver(of => GitHubReviewRequest)
export class ReviewRequestResolver {
    constructor(private readonly prisma: PrismaService) {}

    // @Query('gitHubReviewRequests')
    // async getGitHubReviewRequests(
    //     @Args() args,
    //     @Info() info
    // ): Promise<GitHubReviewRequest[]> {
    //     return await this.prisma.query.gitHubReviewRequests(args, info);
    // }

    // @Query('gitHubReviewRequest')
    // async getGitHubReviewRequest(
    //     @Args() args,
    //     @Info() info
    // ): Promise<GitHubReviewRequest> {
    //     return await this.prisma.query.gitHubReviewRequest(args, info);
    // }

    // @Mutation('createGitHubReviewRequest')
    // async createGitHubReviewRequest(
    //     @Args() args,
    //     @Info() info
    // ): Promise<GitHubReviewRequest> {
    //     return await this.prisma.mutation.createGitHubReviewRequest(args, info);
    // }

    // @Mutation('updateGitHubReviewRequest')
    // async updateGitHubReviewRequest(
    //     @Args() args,
    //     @Info() info
    // ): Promise<GitHubReviewRequest> {
    //     return await this.prisma.mutation.updateGitHubReviewRequest(args, info);
    // }

    // @Subscription()
    // async gitHubReviewRequest(@Args() args, @Info() info) {
    //     return await this.prisma.subscription.gitHubReviewRequest(args, info);

    //     // TODO: switch to custo mimplementation instead of exposing backend
    //     // return pubSub.asyncIterator('gitHubWebhookEvent');
    // }
}
