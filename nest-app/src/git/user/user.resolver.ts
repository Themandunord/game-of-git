import { PrismaService } from '../../prisma/prisma.service';
import {
    Resolver,
    Query,
    Args,
    Info,
    Mutation,
    Subscription
} from '@nestjs/graphql';
import { GitHubUser } from '@game-of-git/common';

@Resolver(of => GitHubUser)
export class UserResolver {
    constructor(private readonly prisma: PrismaService) {}

    // @Query('gitHubUsers')
    // async getGitHubUsers(@Args() args, @Info() info): Promise<GitHubUser[]> {
    //     return await this.prisma.query.gitHubUsers(args, info);
    // }

    // @Query('gitHubUser')
    // async getGitHubUser(@Args() args, @Info() info): Promise<GitHubUser> {
    //     return await this.prisma.query.gitHubUser(args, info);
    // }

    // @Mutation('createGitHubUser')
    // async createGitHubUser(@Args() args, @Info() info): Promise<GitHubUser> {
    //     return await this.prisma.mutation.createGitHubUser(args, info);
    // }

    // @Mutation('updateGitHubUser')
    // async updateGitHubUser(@Args() args, @Info() info): Promise<GitHubUser> {
    //     return await this.prisma.mutation.updateGitHubUser(args, info);
    // }

    // @Subscription()
    // async gitHubUser(@Args() args, @Info() info) {
    //     return await this.prisma.subscription.gitHubUser(args, info);

    //     // TODO: switch to custo mimplementation instead of exposing backend
    //     // return pubSub.asyncIterator('gitHubWebhookEvent');
    // }
}
