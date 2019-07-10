import { GitClientService } from './../git-client.service';
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import axios from 'axios';
import config from '../../config';
import { Repository } from 'src/graphql.schema';
import { AppKeyService } from '../../app-key/app-key.service';

@Injectable()
export class WebhooksService {
  constructor(
    @Inject(forwardRef(() => GitClientService))
    private readonly gitClientService: GitClientService,
    @Inject(forwardRef(() => AppKeyService))
    private readonly appKeyService: AppKeyService
  ) {}

  async initializeRepositoryWebhooks(repository: Repository, user: string) {
    console.log(`Initializing Repository webhooks ${repository.owner} - ${repository.name} on behalf of ${user}`);

    const appKeys = await this.appKeyService.get(user);
    const appKey = appKeys.length > 0 ? appKeys[0].key : null;
    // check for existing webhooks for this repo, if they exist alreday we'll need to either update or delete them.
    // Implementation, TBD!
    // const existingWebhooks = await this.listWebhooks(repository, user);
    // console.log(`There are ${existingWebhooks.length} existing webhooks in this repository`);

    // create the webhook
    const result = await this.createWebhook(appKey, repository);
    console.log('result from webhook creation: ', result);
  }

  async destroyRepositoryWebhooks(repository: Repository, user: string) {
    console.log(`Destroying Repository webhooks ${repository.owner} - ${repository.name} on behalf of ${user}`);

    const appKeys = await this.appKeyService.get(user);
    const appKey = appKeys.length > 0 ? appKeys[0].key : null;
    // check for existing webhooks for this repo, if they exist alreday we'll need to either update or delete them.
    // Implementation, TBD!
    const existingWebhooks = await this.listWebhooks(repository, user);
    console.log(`There are ${existingWebhooks.length} existing webhooks in this repository`);

    await this.deleteWebhook(appKey, repository, existingWebhooks[0].id);

    // create the webhook
    // const result = await this.createWebhook(appKey, repository);
    // console.log('result from webhook creation: ', result);
  }

  /**
   * Uses the GitHub Webhook API to Retrieve a list of Webhooks currently configured on a repositories
   * @param repoId
   */
  async listWebhooks(repository: Repository, user: string) {
    console.log(`listing webhooks currently configured on the repository for user ${user} and repo ${repository.name}`);

    const appKeys = await this.appKeyService.get(user);
    const appKey = appKeys.length > 0 ? appKeys[0].key : null;

    const route = `${config.GITHUB_REST_URL}repos/${repository.owner}/${repository.name}/hooks`;
    console.log(`requesting ${route} with ${appKey}`);

    try {
      const result = await axios.get(
        route,
        {
          headers: {
            Authorization: `Bearer ${appKey}`,
          },
        },
      );
      return result.data;
    } catch (e) {
      console.error('Error Querying for the users webhooks: ' + e);
    }
  }

  /**
   * Uses the GitHub Webhook API to create a new Webhook
   * @param owner
   * @param repository
   */
  async createWebhook(key: string, repository: Repository) {
    console.log(`Creating a webhook for ${repository.owner}'s repository ${repository.name}`);
    // throw new Error(`Net yet configured`);
    const route = `${config.GITHUB_REST_URL}repos/${repository.owner}/${repository.name}/hooks`;
    const url = `${process.env.GIT_SERVICE_DOMAIN}/webhook`;
    console.log(`requesting from ${route} webhook url = ${url}`);

    const CREATE_WEBHOOK_PAYLOAD = {
      name: 'web',
      active: true,
      events: ['*'],
      config: {
        url,
        content_type: 'json',
        insecure_ssl: '0'
      }
    };

    try {
      const result = await axios.post(
        route,
        CREATE_WEBHOOK_PAYLOAD,
        {
          headers: {
            Authorization: `Bearer ${key}`,
          },
        },
      );

      console.log('result from create webhook api call: ', result.data);
      return result.data;
    } catch (e) {
      console.error('Error Creating the webhook for the users webhooks: ' + e);
    }

  }
  
  async deleteWebhook(key: string, repository: Repository, webhookId: number) {
    console.log(`Deleting a webhook ${webhookId} for ${repository.owner}'s repository ${repository.name}`);
    const route = `${config.GITHUB_REST_URL}repos/${repository.owner}/${repository.name}/hooks/${webhookId}`;
    
    try {
      const result = await axios.delete(
        route,
        {
          headers: {
            Authorization: `Bearer ${key}`,
          },
        },
      );

      console.log('result from delete webhook api call: ', result.data);
      return result.data;
    } catch (e) {
      console.error('Error Deleting the webhook for the users webhooks: ' + e);
    }

  }
}
