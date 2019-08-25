import { Resolver, Query, Args, Info, Mutation, Subscription } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { GitHubUser, GitHubWebhookEvent, GitHubBranch } from 'src/graphql.schema';

@Resolver('Branch')
export class BranchResolver {
	constructor(private readonly prisma: PrismaService) {}

	@Query('branches')
	async getBranches(@Args() args, @Info() info): Promise<GitHubBranch[]> {
		return await this.prisma.query.gitHubBranches(args, info);
	}

	@Query('branch')
	async getBranch(@Args() args, @Info() info): Promise<GitHubBranch> {
		return await this.prisma.query.gitHubBranch(args, info);
	}

	@Mutation('createBranch')
	async createBranch(@Args() args, @Info() info): Promise<GitHubBranch> {
		return await this.prisma.mutation.createGitHubBranch(args, info);
	}

	@Mutation('updateBranch')
	async updateWebhookEvent(@Args() args, @Info() info): Promise<GitHubBranch> {
		return await this.prisma.mutation.updateGitHubBranch(args, info);
	}

	@Subscription()
	async branch(@Args() args, @Info() info) {
		return await this.prisma.subscription.gitHubBranch(args, info);

		// TODO: switch to custo mimplementation instead of exposing backend
		// return pubSub.asyncIterator('gitHubWebhookEvent');
	}
}
