import { WebhooksService } from './../git-client/webhooks/webhooks.service';
import { Injectable } from '@nestjs/common';
import { Repository } from '../graphql.schema';
import { GitClientService } from './../git-client/git-client.service';
import GET_REPOSITORIES from './GET_REPOSITORIES.gql';
import { RepositoriesResolver } from './repositories.resolver';
import { runInThisContext } from 'vm';

@Injectable()
export class RepositoriesService {
  constructor(
    private readonly repositoriesResolver: RepositoriesResolver,
    private readonly gitClient: GitClientService,
    private readonly webhooksService: WebhooksService,
  ) {}

  async getRepositoryFromGit(user: string, ownerUsername: string, repo: string) {
    await this.syncRepositoryWithGitHub(repo, ownerUsername, user);

    const storedRepository = await this.repositoriesResolver.getRepository(
      {
        where: {
          name: repo,
        },
      },
      GET_REPOSITORIES,
    );
    const detailsFromGit = await this.gitClient.getRepositoryDetails(user, repo, ownerUsername);

    return {
      ...detailsFromGit,
      ...(storedRepository ? storedRepository : {}),
    };
  }

  /**
   * Retrieve the list of repositories currently being tracked and that can be tracked belon ging to a specific GitHub login
   * @param user
   * @param ownerUsername
   */
  async selectionSet(user: string, ownerUsername: string) {
    const gitRepos = await this.gitClient.getRepositories(user, ownerUsername);
    const storedRepositories = await this.repositoriesResolver.getRepositories(
      {
        where: {
          user: {
            id: user,
          },
        },
      },
      GET_REPOSITORIES,
    );

    const selectableRepos = gitRepos.map(val => {
      // find it in stored repos, if exists, and include stored repo data
      const {
        createdAt,
        databaseId,
        description,
        url,
        homepageUrl,
        id,
        isFork,
        isPrivate,
        name,
        owner,
        updatedAt,
        appKey,
      } = val;

      const existingRepository = storedRepositories.find(stored => {
        return stored.idExternal === id;
      });

      return {
        createdAtExternal: createdAt,
        databaseId,
        description,
        url,
        homepageUrl,
        idExternal: id,
        isFork,
        isPrivate,
        name,
        owner,
        updatedAtExternal: updatedAt,
        isTracked: existingRepository != null ? existingRepository.isTracked : false,
        appKey,
      };
    });

    return selectableRepos;
  }

  //   async getRepositories(user: string, owner: string) {
  //     // return await this.repositoriesResolver.getRepositories(
  //     //   {
  //     //     where: {
  //     //       login: owner,
  //     //     },
  //     //   },
  //     //   GET_REPOSITORY_BASE,
  //     // );
  //   }

  async getRepositoriesFromGit(user: string, owner: string) {
    const repositories = await this.gitClient.getRepositories(user, owner);
    // console.log('returning repositories from git', repositories);

    return repositories;
  }

  async refreshRepositories(user: string, owner: string) {
    const repositories = await this.gitClient.getRepositories(user, owner);

    // console.log('repositories are: ', repositories);
  }

  async createRepository(user: string, ownerUsername: string, name: string) {
    console.log(
      `Repositories Service: Create Repository for user ${user}, repo ${name} belonging to ${ownerUsername}`,
    );

    const repoDetails = await this.gitClient.getRepositoryDetails(user, name, ownerUsername);

    const {
      description,
      homepageUrl,
      url,
      isFork,
      isLocked,
      isPrivate,
      isArchived,
      isDisabled,
      sshUrl,
    } = repoDetails;

    const idExternal = repoDetails.id;
    const createdAtExternal = repoDetails.createdAt;
    const updatedAtExternal = repoDetails.updatedAt;
    const appKey = repoDetails.appKey;
    const owner = ownerUsername;

    const CREATE_PAYLOAD = {
      data: {
        user: {
          connect: {
            id: user,
          },
        },
        appKey: {
          connect: {
            id: appKey,
          },
        },
        name,
        description,
        homepageUrl,
        url,
        owner,
        createdAtExternal,
        updatedAtExternal,
        idExternal,
        isTracked: true,
        isFork,
        isLocked,
        isPrivate,
        isArchived,
        isDisabled,
        sshUrl,
      },
    };

    console.log('Repositories Service: Create Payload: ', CREATE_PAYLOAD);

    const newRepoData = await this.repositoriesResolver.createRepository(
      CREATE_PAYLOAD,
      GET_REPOSITORIES,
    );

    return newRepoData;
  }

  async updateRepository(id: string, data: any) {
    const UPDATE_PAYLOAD = {
      where: {
        id,
      },
      data,
    };
    const updatedRepoData = await this.repositoriesResolver.updateRepository(
      UPDATE_PAYLOAD,
      GET_REPOSITORIES,
    );

    return updatedRepoData;
  }

  async getExistingRepository(id: string) {
    return await this.repositoriesResolver.getRepository(
      {
        where: {
          idExternal: id,
        },
      },
      GET_REPOSITORIES,
    );
  }

  /**
   * Toggle whether a repository should be tracked or not by switching the `isTracked` boolean on the record
   *
   * **NOTE** This will create a new Repository record if the GitHub `id` (or `idExternal`, when stored internally)
   * does not already exist in the Repositories db. Once created it will update the existing record.
   *
   * @param user
   * @param id
   * @param repository
   */
  async toggleTracking(user: string, ownerUsername: string, id: string, name: string) {
    console.log(
      `Repositories Service: Toggle Tracking for user ${user}, repo ${name} belonging to ${ownerUsername}`,
    );

    const existingRepository = await this.getExistingRepository(id);

    let repoData = null;
    if (!existingRepository) {
      repoData = await this.createRepository(user, ownerUsername, name);
    } else {
      const updatedRepoData = await this.updateRepository(existingRepository.id, {
        isTracked: !existingRepository.isTracked,
      });
      repoData = updatedRepoData;
    }
    // toggle the github webhooks
    await this.configureRepositoryWebhooks(repoData, user);

    return repoData;
  }

  async configureRepositoryWebhooks(repository: Repository, user: string): Promise<void> {
    console.log('Repositories Service: configuring repository webhooks', repository);
    if (repository.isTracked) {
      await this.gitClient.webhooks.initializeRepositoryWebhooks(repository, user);
    } else {
      await this.gitClient.webhooks.destroyRepositoryWebhooks(repository, user);
    }
  }

  /**
   * Retrieve all stored repository data by user id
   * @param user
   */
  async syncStore(user: string) {
    const repositories = await this.repositoriesResolver.getRepositories(
      {
        where: {
          user: {
            id: user,
          },
        },
      },
      GET_REPOSITORIES,
    );

    // get tracked event count for each repository
    const results = await Promise.all(
      repositories.map(async repo => {
        const eventCount = await this.webhooksService.eventCountForRepository(repo.id);
        console.log(
          `Repositories Service: Returned ${eventCount} events for repo id ${repo.id}, ${repo.name}`,
        );

        return {
          eventCount,
          ...repo,
        };
      }),
    );

    return results;
  }

  /**
   * Sync the stored Repository with it's current GitHub state
   * @param user
   * @param owner
   * @param id
   */
  async syncRepositoryWithGitHub(name: string, owner: string, user: string) {
    console.log('Repositories Service: syncing repository: ', name);
    await this.gitClient.getRepositoryDetails(user, name, owner);
  }
}
