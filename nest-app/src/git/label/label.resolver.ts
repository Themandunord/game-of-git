import {
    Resolver,
    Query,
    Args,
    Info,
    Mutation,
    Subscription
} from '@nestjs/graphql';
import { PrismaService } from '../../prisma/prisma.service';
import { GitHubLabel } from '@game-of-git/common';

@Resolver(of => GitHubLabel)
export class LabelResolver {
    constructor(private readonly prisma: PrismaService) {}

    // @Query('gitHubLabels')
    // async getGitHubLabels(@Args() args, @Info() info): Promise<GitHubLabel[]> {
    //     return await this.prisma.query.gitHubLabels(args, info);
    // }

    // @Query('gitHubLabel')
    // async getGitHubLabel(@Args() args, @Info() info): Promise<GitHubLabel> {
    //     return await this.prisma.query.gitHubLabel(args, info);
    // }

    // @Mutation('createGitHubLabel')
    // async createGitHubLabel(@Args() args, @Info() info): Promise<GitHubLabel> {
    //     return await this.prisma.mutation.createGitHubLabel(args, info);
    // }

    // @Mutation('updateGitHubLabel')
    // async updateGitHubLabel(@Args() args, @Info() info): Promise<GitHubLabel> {
    //     return await this.prisma.mutation.updateGitHubLabel(args, info);
    // }

    // @Subscription()
    // async gitHubLabel(@Args() args, @Info() info) {
    //     return await this.prisma.subscription.gitHubLabel(args, info);

    //     // TODO: switch to custo mimplementation instead of exposing backend
    //     // return pubSub.asyncIterator('gitHubWebhookEvent');
    // }
}
