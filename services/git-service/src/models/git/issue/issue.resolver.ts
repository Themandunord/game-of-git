import { Resolver, Query, Args, Info, Mutation, Subscription } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { GitHubCommit, GitHubLabel } from 'src/graphql.schema';

@Resolver('Issue')
export class IssueResolver {
	constructor(private readonly prisma: PrismaService) {}

	@Query('issues')
	async getGitHubIssues(@Args() args, @Info() info): Promise<GitHubLabel[]> {
		return await this.prisma.query.gitHubIssues(args, info);
	}

	@Query('issue')
	async getGitHubIssue(@Args() args, @Info() info): Promise<GitHubLabel> {
		return await this.prisma.query.gitHubIssue(args, info);
	}

	@Mutation('createIssue')
	async createGitHubIssue(@Args() args, @Info() info): Promise<GitHubLabel> {
		return await this.prisma.mutation.createGitHubIssue(args, info);
	}

	@Mutation('updateIssue')
	async updateGitHubLabel(@Args() args, @Info() info): Promise<GitHubLabel> {
		return await this.prisma.mutation.updateGitHubIssue(args, info);
	}

	@Subscription()
	async issue(@Args() args, @Info() info) {
		return await this.prisma.subscription.gitHubIssue(args, info);

		// TODO: switch to custo mimplementation instead of exposing backend
		// return pubSub.asyncIterator('gitHubWebhookEvent');
	}
}
