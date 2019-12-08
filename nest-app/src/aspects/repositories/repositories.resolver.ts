import { UserIdArgs } from './../../models/args/userid-args';
import { RepositoryIdArgs } from './../../models/args/repositoryid-args';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { Repository } from '../../models/repository';
import { PrismaService } from '../prisma/prisma.service';

@Resolver(of => Repository)
export class RepositoriesResolver {
    constructor(private readonly prisma: PrismaService) {}

    @Query(returns => Repository)
    repository(@Args() id: RepositoryIdArgs) {
        return this.prisma.client.repository({ id: id.repositoryId });
    }

    // @Query('repositories')
    // async getRepositories(@Args() args, @Info() info): Promise<Repository[]> {
    //     return await this.prisma.query.repositories(args, info);
    // }

    // @Query('repository')
    // async getRepository(@Args() args, @Info() info): Promise<Repository> {
    //     return await this.prisma.query.repository(args, info);
    // }

    // @Mutation('createRepository')
    // async createRepository(@Args() args, @Info() info): Promise<Repository> {
    //     return await this.prisma.mutation.createRepository(args, info);
    // }

    // @Mutation('updateRepository')
    // async updateRepository(@Args() args, @Info() info): Promise<Repository> {
    //     return await this.prisma.mutation.updateRepository(args, info);
    // }
}
