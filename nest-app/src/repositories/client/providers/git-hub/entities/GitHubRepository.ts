import { Repository } from '../../../abstract/entities/Repository/abstract';
import { Logger } from '@nestjs/common';
import { gitHubGql } from '../GitHubGql.client';

const pageSize = 100;

const gitHubPaginatedQuery = (login: string, after?: string) => `query{
    user(login:"${login}"){
      __typename
      repositories(first: ${pageSize} ${after ? `after "${after}"` : ''}){
        edges{
          cursor
                 node{
            watchers{
              totalCount
        }
      url
      updatedAt
      stargazers{
        totalCount
      }
      sshUrl
      collaborators{
        totalCount
      }
      createdAt
      databaseId
      description
      forks{
        totalCount
      }
      hasIssuesEnabled
      hasProjectsEnabled
      hasWikiEnabled
      homepageUrl
      id
      isArchived
      isFork
      issues{
        totalCount
      }
      isLocked
      isMirror
      isPrivate
      isArchived
      isDisabled
      isTemplate
      labels{
        totalCount
        nodes{
          color
          createdAt
          description
          id
          name
        }
      }
      languages{
        totalCount
        nodes{
          color
          id
          name
        }
      }
      milestones{
        totalCount
      }
      name
      owner{
        avatarUrl
        id
        login
      }
      primaryLanguage{
        color
        id
        name
      }
      projects{
        totalCount
      }
      pullRequests{
        totalCount
      }
    } 
        }
        pageInfo{
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        totalCount
      }
    }
  }`;

export class GitHubRepository extends Repository {
    private readonly logger = new Logger('GitHubRepositoryClient');
    constructor() {
        super();
    }

    public async search<GitHubRepositorySearchParams>(
        searchParams
    ): Promise<any[]> {
        const query = gitHubPaginatedQuery(login, after);

        const repositories = await gitHubGql();
    }
    public async getBy<GetByParams>(getByParams: GetByParams): Promise<any[]> {
        throw new Error('Method not implemented.');
    }
}
