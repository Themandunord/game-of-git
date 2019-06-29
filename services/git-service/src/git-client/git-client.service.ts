import { AppKeyService } from './../app-key/app-key.service';
import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { gql } from 'apollo-server-core';
import axios from 'axios';
import * as jwtClient from 'jsonwebtoken';

const GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql';

const GET_REPOSITORIES = (owner: string, count: number) => `
  query {
      user(
    login: "${owner}"
  ){
    repositories(first: ${count}) {
      edges {
        node {
          createdAt
          databaseId
          description
          homepageUrl
          id
          isFork
          isPrivate
          issues {
            totalCount
          }
          name
          owner {
            avatarUrl
            id
            login
            repositories {
              totalCount
            }
            url
          }
          watchers {
            totalCount
          }
          url
          updatedAt
          stargazers {
            totalCount
          }
          pullRequests {
            totalCount
          }
        }
      }
    }
  }
}
`;

const GET_USER_DATA = (user: string) => `
query {
  user(
    login: "${user}"
  ){
    avatarUrl
    createdAt
    watching(first: 100){
      nodes{
        createdAt
        description
        homepageUrl
        id
      }
    }
    name
    repositories(
      first: 10
    ) {
      nodes{
        id
        name
        createdAt
        description
        homepageUrl
        updatedAt
        createdAt
        watchers{
          totalCount
        }
        url
        stargazers{
          totalCount
        }
        pullRequests(first:100){
          totalCount
          nodes{
            author{
              login
            }
            id
            title
            url
            updatedAt
          }
        }
        url
        stargazers{
          totalCount
        }
      }
    }
  }
}
`;

@Injectable()
export class GitClientService {
  constructor(
    @Inject(forwardRef(() => AppKeyService))
    private readonly appKeyService: AppKeyService,
  ) {}

  async testAppKey(key: string, user: string): Promise<boolean> {
    console.log(`GitClientService testAppKey ${key} ${user}`);
    try {
      const result = await axios.post(
        GITHUB_GRAPHQL_URL,
        {
          query: GET_USER_DATA(user),
        },
        {
          headers: {
            Authorization: `Bearer ${key}`,
          },
        },
      );
      console.log(result.status, result.data);

      if (result.data == null || result.data.data == null || result.data.data.user == null) {
        console.error('Missing expected data to validate against in app key test.');

        return false;
      }

      return true;
    } catch (e) {
      console.error('Error testing the app key: ' + e + ' likely invalid.');

      return false;
    }

    return false;
  }

  async getRepositories(user: string, owner: string) {
    console.log(`get repositories from GitHub ${owner}`);

    const appKeys = await this.appKeyService.get(user);
    const appKey = appKeys.length > 0 ? appKeys[0] : null;
    const key = appKey ? appKey.key : null;

    const result = await axios.post(
      GITHUB_GRAPHQL_URL,
      {
        query: GET_REPOSITORIES(owner, 100),
      },
      {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      },
    );

    // console.log('repositories query to GitHub returned status: ' + result.status);

    // console.log('repositories returned from github:', result.data.data.user.repositories.edges);
    // add key id used to get these
    const repositoriesWithAppKeyId = result.data.data.user.repositories.edges.map(val => {
      const updated = {
        ...val.node,
        appKey: appKey.id,
      };

      return updated;
    });

    console.log('returning from getRepositories with: ', repositoriesWithAppKeyId);

    return repositoriesWithAppKeyId;
  }
}
