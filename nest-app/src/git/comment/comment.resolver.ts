import {
    Resolver,
    Query,
    Args,
    Info,
    Mutation,
    Subscription
} from '@nestjs/graphql';
import { PrismaService } from '../../prisma/prisma.service';
import { GitHubComment } from '../../models/github/comment';

@Resolver(of => GitHubComment)
export class CommentResolver {
    constructor(private readonly prisma: PrismaService) {}

    // @Query('gitHubComments')
    // async getGitHubComments(
    //     @Args() args,
    //     @Info() info
    // ): Promise<GitHubComment[]> {
    //     return await this.prisma.query.gitHubComments(args, info);
    // }

    // @Query('gitHubComment')
    // async getGitHubComment(@Args() args, @Info() info): Promise<GitHubComment> {
    //     return await this.prisma.query.gitHubComment(args, info);
    // }

    // @Mutation('createGitHubComment')
    // async createGitHubComment(
    //     @Args() args,
    //     @Info() info
    // ): Promise<GitHubComment> {
    //     return await this.prisma.mutation.createGitHubComment(args, info);
    // }

    // @Mutation('updateGitHubComment')
    // async updateGitHubComment(
    //     @Args() args,
    //     @Info() info
    // ): Promise<GitHubComment> {
    //     return await this.prisma.mutation.updateGitHubComment(args, info);
    // }

    // @Subscription()
    // async gitHubComment(@Args() args, @Info() info) {
    //     return await this.prisma.subscription.gitHubComment(args, info);

    //     // TODO: switch to custo mimplementation instead of exposing backend
    //     // return pubSub.asyncIterator('gitHubWebhookEvent');
    // }
}
