import {
    Query,
    Resolver,
    Args,
    Info,
    Mutation,
    Subscription
} from '@nestjs/graphql';
import { GitHubWebhookEventInput } from './GitHubWebhookEvent.input';
import { Arg } from 'type-graphql';
import { plainToClass } from 'class-transformer';
import {
    GitHubWebhookEvent as GitHubWebhookEventModel,
    GitHubWebhookEvent
} from '@game-of-git/common';

@Resolver(of => GitHubWebhookEventModel)
export class WebhookEventsResolver {
    constructor() {}

    @Mutation(returns => GitHubWebhookEventModel)
    async create(
        @Arg('gitHubWebhookEvent')
        gitHubWebhookEventInput: GitHubWebhookEventInput
    ): Promise<GitHubWebhookEvent> {
        throw new Error('Not implemented yet');
        // return this.prisma.client.createGitHubWebhookEvent({
        //     repository: {
        //         connect: {
        //             id: gitHubWebhookEventInput.repository
        //         }
        //     },
        //     eventType: gitHubWebhookEventInput.eventType,
        //     sender: gitHubWebhookEventInput.sender
        // });
    }

    // 	  async addRecipe(@Arg("recipe") recipeInput: RecipeInput): Promise<Recipe> {
    //     const recipe = plainToClass(Recipe, {
    //       description: recipeInput.description,
    //       title: recipeInput.title,
    //       ratings: [],
    //       creationDate: new Date(),
    //     });
    //     await this.items.push(recipe);
    //     return recipe;
    //   }

    // @Query('gitHubWebhookEvents')
    // async getWebhookEvents(
    //     @Args() args,
    //     @Info() info
    // ): Promise<GitHubWebhookEvent[]> {
    //     return await this.prisma.query.gitHubWebhookEvents(args, info);
    // }

    // @Query('gitHubWebhookEvent')
    // async getWebhookEvent(
    //     @Args() args,
    //     @Info() info
    // ): Promise<GitHubWebhookEvent> {
    //     return await this.prisma.query.gitHubWebhookEvent(args, info);
    // }

    // @Mutation('createGitHubWebhookEvent')
    // async createWebhookEvent(
    //     @Args() args,
    //     @Info() info
    // ): Promise<GitHubWebhookEvent> {
    //     return await this.prisma.mutation.createGitHubWebhookEvent(args, info);
    // }

    // @Mutation('updateGitHubWebhookEvent')
    // async updateWebhookEvent(
    //     @Args() args,
    //     @Info() info
    // ): Promise<GitHubWebhookEvent> {
    //     return await this.prisma.mutation.updateGitHubWebhookEvent(args, info);
    // }

    // @Subscription()
    // async gitHubWebhookEvent(@Args() args, @Info() info) {
    //     console.log('gitHubWebhookEvent subscription!');

    //     return await this.prisma.subscription.gitHubWebhookEvent(args, info);

    //     // TODO: switch to custo mimplementation instead of exposing backend
    //     // return pubSub.asyncIterator('gitHubWebhookEvent');
    // }
}
