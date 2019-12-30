import {
    GitHubRepository,
    Repository,
    RepositoryIdArgs,
    User,
    UsernameArgs
} from '@game-of-git/common';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import {
    Args,
    Mutation,
    Query,
    Resolver,
    Subscription,
    Context
} from '@nestjs/graphql';
import { UserEntity } from '../decorators/user.decorator';
import { GitClientService } from '../git/client/git-client.service';
import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { PrismaService } from '../prisma/prisma.service';
import { TrackRepositoryInput } from './dto/track-repository.input';
import { PubSubEngine } from 'type-graphql';
import { Inject, ExecutionContext, Logger } from '@nestjs/common';

const REPOSITORY_MUTATED_EVENT_NAME = 'repositoryMutated';

@Resolver(of => Repository)
export class RepositoriesResolver {
    private readonly logger = new Logger('RepositoriesResolver');

    constructor(
        private readonly prisma: PrismaService,
        private readonly gitClientService: GitClientService,
        @Inject('PUB_SUB') private pubSub: PubSubEngine
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
        this.logger.log(`repositoryList call for ${usernameArgs}`);

        const githubReposResult = (
            await this.gitClientService.getAll(
                user.email,
                usernameArgs.username
            )
        ).map(repo => ({ ...repo, isTracked: false }));

        const addedRepositories = await this.prisma.client
            .user({ id: user.id })
            .addedRepositories();

        const repos = githubReposResult.map(repo => {
            const addedRepo = addedRepositories.find(
                addedRepo => addedRepo.idExternal === repo.id
            );

            return {
                ...repo,
                isTracked: addedRepo ? addedRepo.isTracked : false
            };
        });

        return repos;
    }

    @Mutation(returns => Repository)
    @UseGuards(GqlAuthGuard)
    async trackRepository(
        @UserEntity() user: User,
        @Args('data') trackRepositoryData: TrackRepositoryInput
    ) {
        this.logger.log(
            `Track Repository ${trackRepositoryData.owner} ${trackRepositoryData.repository}`
        );

        // Load repository data from GitHub
        const githubRepositoryData = await this.gitClientService.get(
            user.email,
            trackRepositoryData.repository,
            trackRepositoryData.owner
        );

        this.logger.log(
            `Loaded data from GitHub: ${githubRepositoryData.name}`
        );

        // Retrieve the existing local repository record (if exists)
        let existingRecord = await this.prisma.client.repository({
            name: trackRepositoryData.repository
        });
        let createdRecord = null;

        // Determine if the toggle is to turn tracking ON or OFF
        const isTracked = existingRecord ? !existingRecord.isTracked : true;

        this.logger.log(
            `${isTracked ? `Creating` : `Destroying`} Repository Record`
        );

        // If there is no existing record, then we are going to start tracking the repository
        if (!existingRecord) {
            const createData = {
                addedBy: {
                    connect: {
                        id: user.id
                    }
                },
                appKey: {
                    connect: {
                        id: (
                            await this.prisma.client
                                .user({ id: user.id })
                                .keys()
                        )[0].id
                    }
                },
                createdAtExternal: githubRepositoryData.createdAt,
                updatedAtExternal: githubRepositoryData.updatedAt,
                idExternal: githubRepositoryData.id,
                isArchived: githubRepositoryData.isArchived,
                isDisabled: githubRepositoryData.isDisabled,
                isFork: githubRepositoryData.isFork,
                isLocked: githubRepositoryData.isLocked,
                isPrivate: githubRepositoryData.isPrivate,
                isTracked: true,
                name: githubRepositoryData.name,
                owner: trackRepositoryData.owner,
                url: githubRepositoryData.url,
                description: githubRepositoryData.description,
                homepageUrl: githubRepositoryData.homepageUrl || null,
                sshUrl: githubRepositoryData.sshUrl || null
            };

            createdRecord = await this.prisma.client.createRepository(
                createData
            );
            existingRecord = createdRecord;
        }

        if (isTracked) {
            this.logger.log('Initializing webhooks');
            await this.gitClientService.webhooks.initializeWebhooks(
                existingRecord as any,
                user.email
            );
            // TODO: better handling of the repository record when webhook initialization fails
        } else {
            this.logger.log('Destroying webhooks');
            await this.gitClientService.webhooks.destroyWebhooks(
                existingRecord as any,
                user.email
            );
        }

        if (!createdRecord) {
            existingRecord = await this.prisma.client.updateRepository({
                where: {
                    id: existingRecord.id
                },
                data: {
                    isTracked
                }
            });
        }

        this.pubSub.publish(REPOSITORY_MUTATED_EVENT_NAME, {
            [REPOSITORY_MUTATED_EVENT_NAME]: existingRecord
        });

        return existingRecord;
    }

    @Subscription(() => Repository, {
        name: REPOSITORY_MUTATED_EVENT_NAME
    })
    async repositoryMutated(@Context() context: ExecutionContext) {
        console.log(
            `${REPOSITORY_MUTATED_EVENT_NAME} subscription call!`,
            context
        );
        return this.pubSub.asyncIterator(REPOSITORY_MUTATED_EVENT_NAME);
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
