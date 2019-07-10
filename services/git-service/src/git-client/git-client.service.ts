import { forwardRef, Inject, Injectable } from '@nestjs/common';
import axios from 'axios';
import config from '../config';
import { AppKeyService } from './../app-key/app-key.service';
import GET_REPOSITORIES from './GET_REPOSITORIES.gql';
import GET_USER_DATA from './GET_USER_DATA.gql';
import GET_REPOSITORY_DETAILS from './GET_REPOSITORY_DETAILS.gql';
import { WebhooksService } from './webhooks/webhooks.service';

@Injectable()
export class GitClientService {
  constructor(
    @Inject(forwardRef(() => AppKeyService))
    private readonly appKeyService: AppKeyService,
    private readonly webhooksService: WebhooksService
  ) {}


    get webhooks() {
      return this.webhooksService;
    }

  /**
   * Test a given AppKey by using it in a GET_USER_DATA query against the GitHub GraphQL API
   * @param key
   * @param user
   */
  async testAppKey(key: string, user: string): Promise<boolean> {
    try {
      const result = await axios.post(
        config.GITHUB_GRAPHQL_URL,
        {
          query: GET_USER_DATA(user),
        },
        {
          headers: {
            Authorization: `Bearer ${key}`,
          },
        },
      );

      if (result.data == null || result.data.data == null || result.data.data.user == null) {
        // tslint:disable:no-console
        console.error('Missing expected data to validate against in app key test.');

        return false;
      }

      return true;
    } catch (e) {
      console.error('Error testing the app key: ' + e + ' likely invalid.');
    }

    return false;
  }

  /**
   * Load Repositories from GitHub and attach the AppKey id used to retrieve them to each record.
   *
   * @param user
   * @param owner
   */
  async getRepositories(user: string, owner: string) {
    const appKeys = await this.appKeyService.get(user);
    const appKey = appKeys.length > 0 ? appKeys[0] : null;
    const key = appKey ? appKey.key : null;

    const result = await axios.post(
      config.GITHUB_GRAPHQL_URL,
      {
        query: GET_REPOSITORIES(owner, 100),
      },
      {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      },
    );

    // add key id used to get these
    const repositoriesWithAppKeyId = result.data.data.user.repositories.edges.map(val => {
      const updated = {
        ...val.node,
        appKey: appKey.id,
      };

      return updated;
    });

    return repositoriesWithAppKeyId;
  }

  /**
   * Get fleshy detalls of a GitHub Repository for syncing with the stored Repository model
   *
   * @param user
   * @param repo
   * @param owner
   */
  async getRepositoryDetails(user: string, repo: string, owner: string) {

    console.log(`Git Client getting Repo details for ${repo} belonging to ${owner}`);

    const appKeys = await this.appKeyService.get(user);
    const appKey = appKeys.length > 0 ? appKeys[0] : null;
    const key = appKey ? appKey.key : null;

    console.log(`querying for ${repo} belonging to ${owner}`);

    const result = await axios.post(
      config.GITHUB_GRAPHQL_URL,
      {
        query: GET_REPOSITORY_DETAILS(repo, owner),
      },
      {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      },
    );

    const repositoryData = {
      ...result.data.data.repository,
      appKey: appKey.id
    };

    return repositoryData;
  }
}
