import { Resolver, Query, Args, Info, Mutation, Subscription } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { GitHubReviewThread } from 'src/graphql.schema';

@Resolver('ReviewThread')
export class ReviewThreadResolver {
	constructor(private readonly prisma: PrismaService) {}

	@Query('gitHubReviewThreads')
	async getGitHubReviewThreads(@Args() args, @Info() info): Promise<GitHubReviewThread[]> {
		return await this.prisma.query.gitHubReviewThreads(args, info);
	}

	@Query('gitHubReviewThread')
	async getGitHubReviewThread(@Args() args, @Info() info): Promise<GitHubReviewThread> {
		return await this.prisma.query.gitHubReviewThread(args, info);
	}

	@Mutation('createGitHubReviewThread')
	async createGitHubReviewThread(@Args() args, @Info() info): Promise<GitHubReviewThread> {
		return await this.prisma.mutation.createGitHubReviewThread(args, info);
	}

	@Mutation('updateGitHubReviewThread')
	async updateGitHubReviewThread(@Args() args, @Info() info): Promise<GitHubReviewThread> {
		return await this.prisma.mutation.updateGitHubReviewThread(args, info);
	}

	@Subscription()
	async gitHubReviewThread(@Args() args, @Info() info) {
		return await this.prisma.subscription.gitHubReviewThread(args, info);

		// TODO: switch to custo mimplementation instead of exposing backend
		// return pubSub.asyncIterator('gitHubWebhookEvent');
	}
}
