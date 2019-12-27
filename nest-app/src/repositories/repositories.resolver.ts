import {
    GitHubRepository,
    Repository,
    RepositoryIdArgs,
    User,
    UsernameArgs
} from '@game-of-git/common';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserEntity } from '../decorators/user.decorator';
import { GitClientService } from '../git/client/git-client.service';
import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { PrismaService } from '../prisma/prisma.service';
import { TrackRepositoryInput } from './dto/track-repository.input';

@Resolver(of => Repository)
export class RepositoriesResolver {
    constructor(
        private readonly prisma: PrismaService,
        private readonly gitClientService: GitClientService
    ) {}

    @Query(returns => Repository)
    repository(@Args() id: RepositoryIdArgs) {
        return this.prisma.client.repository({ id: id.repositoryId });
    }

    // repositoryList query for selectable/deselectable repositories by a username
    @Query(returns => [GitHubRepository])
    @UseGuards(GqlAuthGuard)
    async repositoryList(
        @UserEntity() user: User,
        @Args() usernameArgs: UsernameArgs
    ): Promise<GitHubRepository[]> {
        console.log('repositoryList call for ', user);

        const githubReposResult = (
            await this.gitClientService.getAll(
                user.email,
                usernameArgs.username
            )
        ).map(repo => ({ ...repo, isTracked: false }));

        const addedRepositories = await this.prisma.client
            .user({ id: user.id })
            .addedRepositories();

        const repos = githubReposResult.map(repo => repo);

        console.log('added repos: ', addedRepositories);
        console.log('returning repos: ', repos);
        return repos;
    }

    @Mutation(returns => Repository)
    @UseGuards(GqlAuthGuard)
    async trackRepository(
        @UserEntity() user: User,
        @Args('data') trackRepositoryData: TrackRepositoryInput
    ) {
        console.log('Track Repository', trackRepositoryData);

        // load repository from GitHub
        const githubRepositoryData = await this.gitClientService.get(
            user.email,
            trackRepositoryData.repository,
            trackRepositoryData.owner
        );

        console.log('Loaded data from GitHub: ', githubRepositoryData);

        const existingRecord = await this.prisma.client.repository({
            name: trackRepositoryData.repository
        });

        if (!existingRecord) {
            console.log('Creating Repository Record');
            // create
            // await this.prisma.client.createRepository({
            //     addedBy: {
            //         connect: {
            //             id: user.id
            //         }
            //     },
            //     appKey: {
            //         connect: {
            //             id: user.appKeys[0].id
            //         }
            //     },
            //     createdAtExternal

            // })
        } else {
            console.log('Updating repository record');
            // update
        }
    }

    // @Mutation()
    // @UseGuards(GqlAuthGuard)
    // async trackRepository(@UserEntity() user: User, @Args('data') data: TrackRepositoryInput,
    // ): Promise<Repository> {
    //     console.log('trackRepository');

    //     const repositoryResult = (await this.gitClientService.get(user.email, data.repository, data.owner))

    //     console.log(repositoryResult);

    //     return {} as Repository;
    //     // return await this.prisma.mutation.updateRepository(args, info);
    // }

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
