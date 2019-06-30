import { GitClientService } from './../git-client/git-client.service';
import { RepositoriesResolver } from './repositories.resolver';
import { Injectable } from '@nestjs/common';
import { gql } from 'apollo-server-core';
import { Repository } from '../graphql.schema';

export const GET_REPOSITORIES = gql`
  query {
    id
    idExternal
    name
    owner
    isTracked
  }
`;

// export const GET_STORED_REPOSITORIES = gql`
//     query {
//     id
//     name
//     owner
//     }
// `;

@Injectable()
export class RepositoriesService {
  constructor(
    private readonly repositoriesResolver: RepositoriesResolver,
    private readonly gitClient: GitClientService,
  ) {}

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
    // console.log('git repositories: ', gitRepos);
    console.log('---------------------');
    console.log('stored repositories', storedRepositories);

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
      console.log(
        `Handling ${name}, hasExistingRepository = `,
        existingRepository != null ? existingRepository : false,
      );

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

    console.log(selectableRepos);

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

  async toggleTracking(user: string, id: string, repository: Repository) {
    console.log('toggling repository tracking for ', repository);
    const previousRepositoryState = repository.isTracked;
    console.log({
      where: {
        idExternal: id,
      },
    });
    const existingRepository = await this.repositoriesResolver.getRepository(
      {
        where: {
          idExternal: id,
        },
      },
      GET_REPOSITORIES,
    );

    if (!existingRepository) {
      console.log('CREATING REPOSITORY');
      const { name, idExternal, createdAtExternal, updatedAtExternal, appKey } = repository;
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
          owner,
          createdAtExternal,
          updatedAtExternal,
          idExternal,
          isTracked: true,
        },
      };
      const newRepoData = await this.repositoriesResolver.createRepository(
        CREATE_PAYLOAD,
        GET_REPOSITORIES,
      );

      return newRepoData;
    } else {
      console.log('UPDATING REPOSITORY');
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

      return updatedRepoData;
    }
  }
}
