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
  ) {}

  async getRepositoryFromGit(user: string, ownerUsername: string, repo: string) {
    const detailsFromGit = await this.gitClient.getRepositoryDetails(user, repo, ownerUsername);

    const storedRepositories = await this.repositoriesResolver.getRepositories(
      {
        where: {
          name: repo,
        },
      },
      GET_REPOSITORIES,
    );

    return {
      ...detailsFromGit,
      ...(storedRepositories.length > 0 ? storedRepositories[0] : {}),
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

  async getRepositories(user: string, owner: string) {
    // return await this.repositoriesResolver.getRepositories(
    //   {
    //     where: {
    //       login: owner,
    //     },
    //   },
    //   GET_REPOSITORY_BASE,
    // );
  }

  async getRepositoriesFromGit(user: string, owner: string) {
    const repositories = await this.gitClient.getRepositories(user, owner);
    // console.log('returning repositories from git', repositories);

    return repositories;
  }

  async refreshRepositories(user: string, owner: string) {
    const repositories = await this.gitClient.getRepositories(user, owner);

    // console.log('repositories are: ', repositories);
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
  async toggleTracking(user: string, ownerUsername: string, id: string, repository: Repository) {
    const existingRepository = await this.repositoriesResolver.getRepository(
      {
        where: {
          idExternal: id,
        },
      },
      GET_REPOSITORIES,
    );

    console.log(`Existing Repository? ${existingRepository}`);

    if (!existingRepository) {
      // get repository details
      const repoDetails = await this.gitClient.getRepositoryDetails(
        user,
        repository.name,
        ownerUsername,
      );

      const {
        name,
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

      const { idExternal, createdAtExternal, updatedAtExternal, appKey } = repository;

      const owner = (repository.owner as any).login;
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
      console.log('Create Payload: ', CREATE_PAYLOAD);
      const newRepoData = await this.repositoriesResolver.createRepository(
        CREATE_PAYLOAD,
        GET_REPOSITORIES,
      );

      return newRepoData;
    } else {
      const UPDATE_PAYLOAD = {
        where: {
          id: existingRepository.id,
        },
        data: {
          isTracked: !existingRepository.isTracked,
        },
      };
      const updatedRepoData = await this.repositoriesResolver.updateRepository(
        UPDATE_PAYLOAD,
        GET_REPOSITORIES,
      );

      //   await this.configureRepositoryWebhooks(repository);

      return updatedRepoData;
    }
  }

  /**
   * Retrieve all stored repository data by user id
   * @param user
   */
  async syncStore(user: string) {
    return await this.repositoriesResolver.getRepositories(
      {
        where: {
          user: {
            id: user,
          },
        },
      },
      GET_REPOSITORIES,
    );
  }

  //   async configureRepositoryWebhooks(repository: Repository): Promise<boolean> {
  //     console.log('configuring repository webhooks', repository);
  //   }
}
