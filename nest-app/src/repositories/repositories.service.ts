import {
    Repository,
    User,
    UsernameArgs,
    IdOrNameArgs,
    GitHubRepository
} from '@game-of-git/common';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { PubSubEngine } from 'type-graphql';
import { GitClientService } from '../git/client/git-client.service';
import { PrismaService } from '../prisma/prisma.service';
import { TrackRepositoryInput } from './dto/track-repository.input';

const REPOSITORY_MUTATED_EVENT_NAME = 'repositoryMutated';
@Injectable()
export class RepositoriesService {
    private readonly logger = new Logger('RepositoriesService');
    constructor(
        private readonly prisma: PrismaService,
        private readonly gitClientService: GitClientService,
        @Inject('PUB_SUB') private pubSub: PubSubEngine
    ) {}

    async repositoryList(user: User, usernameArgs: UsernameArgs) {
        this.logger.log(`repositoryList for ${usernameArgs.username}`);
        const githubReposResult = (
            await this.gitClientService.getAll(
                user.email,
                usernameArgs.username
            )
        ).map(repo => ({ ...repo, isTracked: false }));

        const addedRepositories = await this.prisma.client
            .user({ id: user.id })
            .addedRepositories();

        const repos = await Promise.all(
            githubReposResult.map(async repo => {
                const addedRepo = addedRepositories.find(
                    addedRepo => addedRepo.idExternal === repo.id
                );

                const game = addedRepo
                    ? await this.prisma.client
                          .repository({
                              id: addedRepo.id
                          })
                          .game()
                    : null;

                return {
                    ...repo,
                    isTracked: addedRepo ? addedRepo.isTracked : false,
                    game: game ? game : undefined
                } as GitHubRepository;
            })
        );

        return repos as GitHubRepository[];
    }

    /**
     *
     * Explicitly set the tracked status of a given owner's repository
     *
     */
    public async setRepositoryTracking(
        user: User,
        repositoryIdOrNameArgs: IdOrNameArgs,
        track: boolean
    ) {
        const existingRecord = await this.prisma.client.repository(
            repositoryIdOrNameArgs
        );

        if (!track) {
            this.logger.log('Destroying webhooks');
            await this.gitClientService.webhooks.destroyWebhooks(
                existingRecord as any,
                user.email
            );
        } else {
            this.logger.log('Creating webhooks');
            await this.gitClientService.webhooks.initializeWebhooks(
                existingRecord as any,
                user.email
            );
        }
        const repo = await this.prisma.client.updateRepository({
            where: repositoryIdOrNameArgs,
            data: { isTracked: track }
        });

        this.pubSub.publish(REPOSITORY_MUTATED_EVENT_NAME, {
            [REPOSITORY_MUTATED_EVENT_NAME]: repo
        });
    }

    /**
     * Creates the repository record and sets up the webhook integration
     *
     * @param user
     * @param trackRepositoryInput
     */
    async trackRepository(
        user: User,
        trackRepositoryInput: TrackRepositoryInput
    ) {
        this.logger.log(
            `trackRepository ${user.gitLogin}, ${trackRepositoryInput.owner}, ${trackRepositoryInput.repository}`
        );

        // Load repository data from GitHub
        const githubRepositoryData = await this.gitClientService.get(
            user.email,
            trackRepositoryInput.repository,
            trackRepositoryInput.owner
        );

        this.logger.log(
            `Loaded data from GitHub: ${githubRepositoryData.name}`
        );

        // Retrieve the existing local repository record (if exists)
        let existingRecord = await this.prisma.client.repository({
            name: trackRepositoryInput.repository
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
                owner: trackRepositoryInput.owner,
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

    async createRepository(
        user: User,
        githubRepositoryData: any,
        trackRepoInput: TrackRepositoryInput
    ): Promise<Repository> {
        this.logger.log('Create Repository');

        const appKeyId = (
            await this.prisma.client.user({ id: user.id }).keys()
        )[0].id;
        const createData = {
            addedBy: {
                connect: {
                    id: user.id
                }
            },
            appKey: {
                connect: {
                    id: appKeyId
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
            owner: trackRepoInput.owner,
            url: githubRepositoryData.url,
            description: githubRepositoryData.description,
            homepageUrl: githubRepositoryData.homepageUrl || null,
            sshUrl: githubRepositoryData.sshUrl || null
        };

        const createdRecord = await this.prisma.client.createRepository(
            createData
        );

        return createdRecord as any;
    }
}
