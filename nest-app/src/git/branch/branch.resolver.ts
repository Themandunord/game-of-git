import { GitHubBranch } from '@game-of-git/common';
import {
    Resolver,
    Query,
    Args,
    Info,
    Mutation,
    Subscription
} from '@nestjs/graphql';
import { PrismaService } from '../../prisma/prisma.service';

@Resolver(of => GitHubBranch)
export class BranchResolver {
    constructor(private readonly prisma: PrismaService) {}

    // @Query('gitHubBranches')
    // async getBranches(@Args() args, @Info() info): Promise<GitHubBranch[]> {
    //     return await this.prisma.query.gitHubBranches(args, info);
    // }

    // @Query('gitHubBranch')
    // async getBranch(@Args() args, @Info() info): Promise<GitHubBranch> {
    //     return await this.prisma.query.gitHubBranch(args, info);
    // }

    // @Mutation('createGitHubBranch')
    // async createBranch(@Args() args, @Info() info): Promise<GitHubBranch> {
    //     return await this.prisma.mutation.createGitHubBranch(args, info);
    // }

    // @Mutation('updateGitHubBranch')
    // async updateWebhookEvent(
    //     @Args() args,
    //     @Info() info
    // ): Promise<GitHubBranch> {
    //     return await this.prisma.mutation.updateGitHubBranch(args, info);
    // }

    // @Subscription()
    // async gitHubBranch(@Args() args, @Info() info) {
    //     return await this.prisma.subscription.gitHubBranch(args, info);

    //     // TODO: switch to custo mimplementation instead of exposing backend
    //     // return pubSub.asyncIterator('gitHubWebhookEvent');
    // }
}
