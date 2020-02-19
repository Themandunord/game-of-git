import {
    Resolver,
    Query,
    Args,
    Info,
    Mutation,
    Subscription
} from '@nestjs/graphql';

import { GitHubRepository } from '@game-of-git/common';
@Resolver(of => GitHubRepository)
export class RepositoryResolver {
    constructor() {}

    // @Query('gitHubRepositories')
    // async getGitHubRepositories(
    //     @Args() args,
    //     @Info() info
    // ): Promise<GitHubRepository[]> {
    //     return await this.prisma.query.gitHubRepositories(args, info);
    // }

    // @Query('gitHubRepository')
    // async getGitHubRepository(
    //     @Args() args,
    //     @Info() info
    // ): Promise<GitHubRepository> {
    //     return await this.prisma.query.gitHubRepository(args, info);
    // }

    // @Mutation('createGitHubRepository')
    // async createGitHubRepository(
    //     @Args() args,
    //     @Info() info
    // ): Promise<GitHubRepository> {
    //     return await this.prisma.mutation.createGitHubRepository(args, info);
    // }

    // @Mutation('updateGitHubRepository')
    // async updateGitHubRepository(
    //     @Args() args,
    //     @Info() info
    // ): Promise<GitHubRepository> {
    //     return await this.prisma.mutation.updateGitHubRepository(args, info);
    // }

    // @Subscription()
    // async gitHubRepository(@Args() args, @Info() info) {
    //     return await this.prisma.subscription.gitHubRepository(args, info);

    //     // TODO: switch to custo mimplementation instead of exposing backend
    //     // return pubSub.asyncIterator('gitHubWebhookEvent');
    // }
}
