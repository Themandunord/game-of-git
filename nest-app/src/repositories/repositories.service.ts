import { RepositoryIdArgs } from '../models/args/repositoryid-args';
import { Injectable, Logger } from '@nestjs/common';
import GET_REPOSITORIES from './GET_REPOSITORIES.gql';
import { RepositoriesResolver } from './repositories.resolver';
import { WebhooksService } from '../git/client/webhooks/webhooks.service';
import { GitClientService } from '../git/client/git-client.service';
import { plainToClass } from 'class-transformer';

@Injectable()
export class RepositoriesService {
    private readonly logger = new Logger('RepositoriesService');
    constructor() // private readonly repositoriesResolver: RepositoriesResolver,
    // private readonly gitClient: GitClientService,
    // private readonly webhooksService: WebhooksService
    {}

    // /**
    //  * Load a repository from GitHub's API and merge it with the locally stored data
    //  *
    //  * @param user
    //  * @param ownerUsername
    //  * @param repo
    //  */
    // async getRepositoryWithFreshGitData(
    //     user: string,
    //     ownerUsername: string,
    //     repo: string
    // ) {
    //     this.logger.log(
    //         `getting repository from Git for ${user} ${ownerUsername} ${repo}`
    //     );

    //     // todo then can just call getRepository on the resolver.
    //     // await this.syncRepositoryWithGitHub(repo, ownerUsername, user);

    //     const storedRepository = await this.repositoriesResolver.repository(
    //         plainToClass(RepositoryIdArgs, { repositoryId: repo })
    //         // {
    //         //     where: {
    //         //         name: repo
    //         //     }
    //         // },
    //         // GET_REPOSITORIES
    //     );
    //     const detailsFromGit = await this.gitClient.get(
    //         user,
    //         repo,
    //         ownerUsername
    //     );

    //     return {
    //         ...detailsFromGit,
    //         ...(storedRepository ? storedRepository : {})
    //     };
    // }

    // /**
    //  * Retrieve the list of repositories currently being tracked and that can be tracked belonging to a specific GitHub login
    //  *
    //  * @param user
    //  * @param ownerUsername
    //  */
    // async selectionSet(user: string, ownerUsername: string) {
    //     const gitRepos = await this.gitClient.getAll(user, ownerUsername);
    //     const storedRepositories = await this.repositoriesResolver.getRepositories(
    //         {
    //             owner: ownerUsername
    //         },
    //         GET_REPOSITORIES
    //     );

    //     const selectableRepos = gitRepos.map(val => {
    //         // find it in stored repos, if exists, and include stored repo data
    //         const {
    //             createdAt,
    //             databaseId,
    //             description,
    //             url,
    //             homepageUrl,
    //             id,
    //             isFork,
    //             isPrivate,
    //             name,
    //             owner,
    //             updatedAt,
    //             appKey
    //         } = val;

    //         const existingRepository = storedRepositories.find(stored => {
    //             return stored.idExternal === id;
    //         });

    //         return {
    //             createdAtExternal: createdAt,
    //             databaseId,
    //             description,
    //             url,
    //             homepageUrl,
    //             idExternal: id,
    //             isFork,
    //             isPrivate,
    //             name,
    //             owner,
    //             updatedAtExternal: updatedAt,
    //             isTracked:
    //                 existingRepository != null
    //                     ? existingRepository.isTracked
    //                     : false,
    //             appKey
    //         };
    //     });

    //     return selectableRepos;
    // }

    // /**
    //  * Create an Internally stored Repository for a User
    //  *
    //  * @param user
    //  * @param ownerUsername
    //  * @param name
    //  */
    // async create(user: string, ownerUsername: string, name: string) {
    //     this.logger.log(
    //         `Create Repository for user ${user}, repo ${name} belonging to ${ownerUsername}`
    //     );

    //     const repoDetails = await this.gitClient.get(user, name, ownerUsername);

    //     const {
    //         description,
    //         homepageUrl,
    //         url,
    //         isFork,
    //         isLocked,
    //         isPrivate,
    //         isArchived,
    //         isDisabled,
    //         sshUrl
    //     } = repoDetails;

    //     const idExternal = repoDetails.id;
    //     const createdAtExternal = repoDetails.createdAt;
    //     const updatedAtExternal = repoDetails.updatedAt;
    //     const appKey = repoDetails.appKey;
    //     const owner = ownerUsername;

    //     const CREATE_PAYLOAD = {
    //         data: {
    //             addedBy: {
    //                 connect: {
    //                     id: user
    //                 }
    //             },
    //             appKey: {
    //                 connect: {
    //                     id: appKey
    //                 }
    //             },
    //             name,
    //             description,
    //             homepageUrl,
    //             url,
    //             owner,
    //             createdAtExternal,
    //             updatedAtExternal,
    //             idExternal,
    //             isTracked: true,
    //             isFork,
    //             isLocked,
    //             isPrivate,
    //             isArchived,
    //             isDisabled,
    //             sshUrl
    //         }
    //     };

    //     // tslint:disable-next-line:no-console
    //     console.log(CREATE_PAYLOAD);

    //     const newRepoData = await this.repositoriesResolver.createRepository(
    //         CREATE_PAYLOAD,
    //         GET_REPOSITORIES
    //     );

    //     return newRepoData;
    // }

    // /**
    //  * Updates the internally stored Repository
    //  *
    //  * @param id
    //  * @param data
    //  */
    // async update(id: string, data: any) {
    //     const UPDATE_PAYLOAD = {
    //         where: {
    //             id
    //         },
    //         data
    //     };
    //     const updatedRepoData = await this.repositoriesResolver.updateRepository(
    //         UPDATE_PAYLOAD,
    //         GET_REPOSITORIES
    //     );

    //     return updatedRepoData;
    // }

    // /**
    //  * Retrieves an internally stored Repository
    //  *
    //  * @param idExternal
    //  */
    // async get(idExternal: string) {
    //     return await this.repositoriesResolver.getRepository(
    //         {
    //             where: {
    //                 idExternal
    //             }
    //         },
    //         GET_REPOSITORIES
    //     );
    // }

    // /**
    //  * Retrieve all stored repository data by user id
    //  *
    //  * @param user
    //  */
    // async getAll(user: string) {
    //     const repositories = await this.repositoriesResolver.getRepositories(
    //         {
    //             where: {
    //                 addedBy: {
    //                     id: user
    //                 }
    //             }
    //         },
    //         GET_REPOSITORIES
    //     );

    //     // get tracked event count for each repository
    //     const results = await Promise.all(
    //         repositories.map(async repo => {
    //             const eventCount = await this.webhooksService.eventCountForRepository(
    //                 repo.id
    //             );
    //             this.logger.log(
    //                 `Returned ${eventCount} events for repo id ${repo.id}, ${repo.name}`
    //             );

    //             return {
    //                 eventCount,
    //                 ...repo
    //             };
    //         })
    //     );

    //     return results;
    // }

    // /**
    //  * Toggle whether a repository should be tracked or not by switching the `isTracked` boolean on the record
    //  *
    //  * **NOTE** This will create a new Repository record if the GitHub `id` (or `idExternal`, when stored internally)
    //  * does not already exist in the Repositories db. Once created it will update the existing record.
    //  *
    //  * @param user
    //  * @param id
    //  * @param repository
    //  */
    // async toggleTracking(
    //     user: string,
    //     ownerUsername: string,
    //     id: string,
    //     name: string
    // ) {
    //     this.logger.log(
    //         `Toggle Tracking for user ${user}, repo ${name} belonging to ${ownerUsername}`
    //     );

    //     const existingRepository = await this.get(id);

    //     let repoData = null;
    //     if (!existingRepository) {
    //         repoData = await this.create(user, ownerUsername, name);
    //     } else {
    //         const updatedRepoData = await this.update(existingRepository.id, {
    //             isTracked: !existingRepository.isTracked
    //         });
    //         repoData = updatedRepoData;
    //     }
    //     // toggle the github webhooks
    //     await this.configureRepositoryWebhooks(repoData, user);

    //     return repoData;
    // }

    // /**
    //  * Configures the Webhooks of a Repository based on the `isTracked` status of the Repo
    //  *
    //  * - if `true` then it initializes them
    //  * - if `false` then it destroys them
    //  *
    //  * @param repository
    //  * @param user
    //  */
    // async configureRepositoryWebhooks(
    //     repository: Repository,
    //     user: string
    // ): Promise<void> {
    //     this.logger.log(`configuring repository webhooks ${repository.name}`);
    //     if (repository.isTracked) {
    //         await this.gitClient.webhooks.initializeWebhooks(repository, user);
    //     } else {
    //         await this.gitClient.webhooks.destroyWebhooks(repository, user);
    //     }
    // }

    // /**
    //  * Sync the stored Repository with it's current GitHub state
    //  *
    //  * @todo implement
    //  *
    //  * @param user
    //  * @param owner
    //  * @param id
    //  */
    // async syncRepositoryWithGitHub(name: string, owner: string, user: string) {
    //     this.logger.log(`syncing repository: ${name}`);
    //     const updatedData = await this.gitClient.get(user, name, owner);
    // }
}
