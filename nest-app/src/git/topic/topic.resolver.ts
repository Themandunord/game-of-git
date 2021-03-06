import {
    Resolver,
    Query,
    Args,
    Info,
    Mutation,
    Subscription
} from '@nestjs/graphql';

import { GitHubTopic } from '@game-of-git/common';
@Resolver(of => GitHubTopic)
export class TopicResolver {
    constructor() {}

    // @Query('gitHubTopics')
    // async getGitHubTopics(@Args() args, @Info() info): Promise<GitHubTopic[]> {
    //     return await this.prisma.query.gitHubTopics(args, info);
    // }

    // @Query('gitHubTopic')
    // async getGitHubTopic(@Args() args, @Info() info): Promise<GitHubTopic> {
    //     return await this.prisma.query.gitHubTopic(args, info);
    // }

    // @Mutation('createGitHubTopic')
    // async createGitHubTopic(@Args() args, @Info() info): Promise<GitHubTopic> {
    //     return await this.prisma.mutation.createGitHubTopic(args, info);
    // }

    // @Mutation('updateGitHubTopic')
    // async updateGitHubTopic(@Args() args, @Info() info): Promise<GitHubTopic> {
    //     return await this.prisma.mutation.updateGitHubTopic(args, info);
    // }

    // @Subscription()
    // async gitHubTopic(@Args() args, @Info() info) {
    //     return await this.prisma.subscription.gitHubTopic(args, info);

    //     // TODO: switch to custo mimplementation instead of exposing backend
    //     // return pubSub.asyncIterator('gitHubWebhookEvent');
    // }
}
