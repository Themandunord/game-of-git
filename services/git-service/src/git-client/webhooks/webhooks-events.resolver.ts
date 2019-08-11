import { Query, Resolver, Args, Info, Mutation, Subscription } from '@nestjs/graphql';
import { PrismaService } from '../../prisma/prisma.service';
import { GitHubWebhookEvent } from '../../graphql.schema';
import pubSub from '../../pubsub';

@Resolver('WebhookEvents')
export class WebhookEventsResolver {
	constructor(private readonly prisma: PrismaService) {}

	@Query('gitHubWebhookEvents')
	async getWebhookEvents(@Args() args, @Info() info): Promise<GitHubWebhookEvent[]> {
		return await this.prisma.query.gitHubWebhookEvents(args, info);
	}

	@Query('gitHubWebhookEvent')
	async getWebhookEvent(@Args() args, @Info() info): Promise<GitHubWebhookEvent> {
		return await this.prisma.query.gitHubWebhookEvent(args, info);
	}

	@Mutation('createGitHubWebhookEvent')
	async createWebhookEvent(@Args() args, @Info() info): Promise<GitHubWebhookEvent> {
		return await this.prisma.mutation.createGitHubWebhookEvent(args, info);
	}

	@Mutation('updateGitHubWebhookEvent')
	async updateWebhookEvent(@Args() args, @Info() info): Promise<GitHubWebhookEvent> {
		return await this.prisma.mutation.updateGitHubWebhookEvent(args, info);
	}

	@Subscription('gitHubWebhookEvent')
	gitHubWebhookEventAdded() {
		console.log('GITHUB WEBHOOK EVENT ADDED!');

		return pubSub.asyncIterator('gitHubWebhookEventAdded');
	}
}
