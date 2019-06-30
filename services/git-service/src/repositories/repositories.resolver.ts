import { Query, Resolver, Args, Info, Mutation } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { Repository } from '../graphql.schema';

@Resolver('Repositories')
export class RepositoriesResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('repositories')
  async getRepositories(@Args() args, @Info() info): Promise<Repository[]> {
    return await this.prisma.query.repositories(args, info);
  }

  @Query('repository')
  async getRepository(@Args() args, @Info() info): Promise<Repository> {
    return await this.prisma.query.repository(args, info);
  }

  @Mutation('createRepository')
  async createRepository(@Args() args, @Info() info): Promise<Repository> {
    return await this.prisma.mutation.createRepository(args, info);
  }

  @Mutation('updateRepository')
  async updateRepository(@Args() args, @Info() info): Promise<Repository> {
    return await this.prisma.mutation.updateRepository(args, info);
  }
}
