import { Resolver, Query, Args, Info, Mutation, Subscription } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { GitHubFileDiff } from 'src/graphql.schema';

@Resolver('FileDiff')
export class FileDiffResolver {
	constructor(private readonly prisma: PrismaService) {}

	@Query('fileDiffs')
	async getGitHubFileDiffs(@Args() args, @Info() info): Promise<GitHubFileDiff[]> {
		return await this.prisma.query.gitHubFileDiffs(args, info);
	}

	@Query('fileDiff')
	async getGitHubFileDiff(@Args() args, @Info() info): Promise<GitHubFileDiff> {
		return await this.prisma.query.gitHubFileDiff(args, info);
	}

	@Mutation('createFileDiff')
	async createGitHubFileDiff(@Args() args, @Info() info): Promise<GitHubFileDiff> {
		return await this.prisma.mutation.createGitHubFileDiff(args, info);
	}

	@Mutation('updateFileDiff')
	async updateGitHubFileDiff(@Args() args, @Info() info): Promise<GitHubFileDiff> {
		return await this.prisma.mutation.updateGitHubFileDiff(args, info);
	}

	@Subscription()
	async fileDiff(@Args() args, @Info() info) {
		return await this.prisma.subscription.gitHubFileDiff(args, info);

		// TODO: switch to custo mimplementation instead of exposing backend
		// return pubSub.asyncIterator('gitHubWebhookEvent');
	}
}
