import {
    Resolver,
    Query,
    Args,
    Info,
    Mutation,
    Subscription
} from '@nestjs/graphql';
import { PrismaService } from '../../prisma/prisma.service';
import { GitHubFileDiff } from '@game-of-git/common';

@Resolver(of => GitHubFileDiff)
export class FileDiffResolver {
    constructor(private readonly prisma: PrismaService) {}

    // @Query('gitHubFileDiffs')
    // async getGitHubFileDiffs(
    //     @Args() args,
    //     @Info() info
    // ): Promise<GitHubFileDiff[]> {
    //     return await this.prisma.query.gitHubFileDiffs(args, info);
    // }

    // @Query('gitHubFileDiff')
    // async getGitHubFileDiff(
    //     @Args() args,
    //     @Info() info
    // ): Promise<GitHubFileDiff> {
    //     return await this.prisma.query.gitHubFileDiff(args, info);
    // }

    // @Mutation('createGitHubFileDiff')
    // async createGitHubFileDiff(
    //     @Args() args,
    //     @Info() info
    // ): Promise<GitHubFileDiff> {
    //     return await this.prisma.mutation.createGitHubFileDiff(args, info);
    // }

    // @Mutation('updateGitHubFileDiff')
    // async updateGitHubFileDiff(
    //     @Args() args,
    //     @Info() info
    // ): Promise<GitHubFileDiff> {
    //     return await this.prisma.mutation.updateGitHubFileDiff(args, info);
    // }

    // @Subscription()
    // async gitHubFileDiff(@Args() args, @Info() info) {
    //     return await this.prisma.subscription.gitHubFileDiff(args, info);

    //     // TODO: switch to custo mimplementation instead of exposing backend
    //     // return pubSub.asyncIterator('gitHubWebhookEvent');
    // }
}
