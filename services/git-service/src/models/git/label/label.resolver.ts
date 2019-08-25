import { Resolver, Query, Args, Info, Mutation, Subscription } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { GitHubLabel } from 'src/graphql.schema';

@Resolver('Label')
export class LabelResolver {
	constructor(private readonly prisma: PrismaService) {}

	@Query('labels')
	async getGitHubIssues(@Args() args, @Info() info): Promise<GitHubLabel[]> {
		return await this.prisma.query.gitHubIssues(args, info);
	}

	@Query('label')
	async getGitHubIssue(@Args() args, @Info() info): Promise<GitHubLabel> {
		return await this.prisma.query.gitHubIssue(args, info);
	}

	@Mutation('createLabel')
	async createGitHubLabel(@Args() args, @Info() info): Promise<GitHubLabel> {
		return await this.prisma.mutation.createGitHubLabel(args, info);
	}

	@Mutation('updateLabel')
	async updateGitHubLabel(@Args() args, @Info() info): Promise<GitHubLabel> {
		return await this.prisma.mutation.updateGitHubLabel(args, info);
	}

	@Subscription()
	async label(@Args() args, @Info() info) {
		return await this.prisma.subscription.gitHubLabel(args, info);

		// TODO: switch to custo mimplementation instead of exposing backend
		// return pubSub.asyncIterator('gitHubWebhookEvent');
	}
}
