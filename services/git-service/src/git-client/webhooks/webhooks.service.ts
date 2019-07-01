import { GitClientService } from './../git-client.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WebhooksService {
  constructor(private readonly gitClientService: GitClientService) {}

  /**
   * Uses the GitHub Webhook API to Retrieve a list of Webhooks currently configured on a repositories
   * @param owner
   * @param repoId
   */
  async listWebhooks(owner: string, repoId: string) {
    console.log('listing webhooks currently configured on the repository');
    throw new Error(`Not yet configured`);
  }

  /**
   * Uses the GitHub Webhook API to create a new Webhook
   * @param owner
   * @param repoId
   * @param webhookConfig
   */
  async createWebhook(owner: string, repoId: string, webhookConfig: any) {
    console.log(`Creating a webhook for ${owner}'s repository ${repoId}`, webhookConfig);

    return false;
  }
}
