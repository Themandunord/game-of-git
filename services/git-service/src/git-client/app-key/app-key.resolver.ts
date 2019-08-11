import { Query, Resolver, Args, Info, Mutation } from '@nestjs/graphql';
import { PrismaService } from '../../prisma/prisma.service';
import { AppKey } from '../../graphql.schema';

@Resolver('AppKey')
export class AppKeyResolver {
	constructor(private readonly prisma: PrismaService) {}

	@Query('appKeys')
	async getAppKeys(@Args() args, @Info() info): Promise<AppKey[]> {
		return await this.prisma.query.appKeys(args, info);
	}

	@Query('appKey')
	async getAppKey(@Args() args, @Info() info): Promise<AppKey> {
		return await this.prisma.query.appKey(args, info);
	}

	@Mutation('createAppKey')
	async createAppKey(@Args() args, @Info() info): Promise<AppKey> {
		return await this.prisma.mutation.createAppKey(args, info);
	}

	@Mutation('updateAppKey')
	async updateAppKey(@Args() args, @Info() info): Promise<AppKey> {
		return await this.prisma.mutation.updateAppKey(args, info);
	}
}
