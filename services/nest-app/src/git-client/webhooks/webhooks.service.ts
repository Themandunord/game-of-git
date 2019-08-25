import { forwardRef, Inject, Injectable, Logger } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import axios from "axios";
import config from "../../config";
import { GitClientService } from "./../git-client.service";
import { HandleWebhookCommand } from "./commands/handle-webhook.command";
import { IRepositoryWebhook } from "./IRepositoryWebhook.interface";
import { GitHubWebhookEventType } from "./parser/eventModels/EventType.types";
import { ParserService } from "./parser/parser.service";
import { WebhooksRepository } from "./webhooks.repository";
import { Repository } from "../../prisma/prisma.binding";

@Injectable()
export class WebhooksService {
  private readonly logger = new Logger("WebhooksService");

  constructor(
    @Inject(forwardRef(() => GitClientService))
    private readonly gitClientService: GitClientService,
    private readonly parserService: ParserService,
    private readonly commandBus: CommandBus,
    @Inject(forwardRef(() => WebhooksRepository))
    private readonly webhooksRepository: WebhooksRepository
  ) {}

  /**
   * Initialize required webhooks on a Repository via the GitHub Webhook API
   *
   * Once complete, the app should start receiving webhooks from GitHub. Initially a PING event.
   *
   * @param repository
   * @param user
   */
  async initializeWebhooks(repository: Repository, user: string) {
    this.logger.log(
      `Initializing Repository webhooks ${repository.owner} - ${repository.name} on behalf of ${user}`
    );

    const appKeys = await this.gitClientService.appKey.getAllByUser(user);
    const appKey = appKeys.length > 0 ? appKeys[0].key : null;

    // TODO: Handle if there is no app key

    // check for existing webhooks for this repo, if they exist alreday we'll need to either update or delete them.
    // Implementation, TBD!
    // const existingWebhooks = await this.listWebhooks(repository, user);
    // this.logger.log(`There are ${existingWebhooks.length} existing webhooks in this repository`);

    // create the webhook
    const result = await this.initialize(appKey, repository);
    // tslint:disable-next-line:no-console
    console.log("result from webhook creation: ", result);

    // TODO: Error handling
  }

  /**
   * Destroy all Game of Git Webhooks of a Repository using the GitHub Webhooks API
   *
   * Once complete the app should receive a webhook event for the deletion/unregistration of the webhook
   *
   * @param repository
   * @param user
   */
  async destroyWebhooks(repository: Repository, user: string) {
    this.logger.log(
      `Destroying Repository webhooks ${repository.owner} - ${repository.name} on behalf of ${user}`
    );

    const appKeys = await this.gitClientService.appKey.getAllByUser(user);
    const appKey = appKeys.length > 0 ? appKeys[0].key : null;
    // check for existing webhooks for this repo, if they exist alreday we'll need to either update or delete them.
    // Implementation, TBD!
    const existingWebhooks = await this.getAll(repository, user);
    this.logger.log(
      `There are ${existingWebhooks.length} existing webhooks in this repository`
    );

    await this.destroy(appKey, repository, existingWebhooks[0].id);
  }

  /**
   * Uses the GitHub Webhook API to Retrieve a list of Webhooks currently configured on a repositories
   * @param repoId
   */
  async getAll(repository: Repository, user: string) {
    this.logger.log(
      `listing webhooks currently configured on the repository for user ${user} and repo ${repository.name}`
    );

    const appKeys = await this.gitClientService.appKey.getAllByUser(user);
    const appKey = appKeys.length > 0 ? appKeys[0].key : null;

    const route = `${config.GITHUB_REST_URL}repos/${repository.owner}/${repository.name}/hooks`;
    this.logger.log(`requesting ${route} with ${appKey}`);

    try {
      const result = await axios.get(route, {
        headers: {
          Authorization: `Bearer ${appKey}`
        }
      });

      return result.data;
    } catch (e) {
      this.logger.error("Error Querying for the users webhooks: " + e);
    }
  }

  /**
   * Uses the GitHub Webhook API to initialize/create a new Webhook
   *
   * @param owner
   * @param repository
   */
  async initialize(key: string, repository: Repository) {
    this.logger.log(
      `Creating a webhook for ${repository.owner}'s repository ${repository.name}`
    );
    // throw new Error(`Net yet configured`);
    const route = `${config.GITHUB_REST_URL}repos/${repository.owner}/${repository.name}/hooks`;
    const url = `${process.env.GIT_SERVICE_DOMAIN}/webhook/${repository.id}`;
    this.logger.log(`requesting from ${route} webhook url = ${url}`);

    const CREATE_WEBHOOK_PAYLOAD = {
      name: "web",
      active: true,
      events: ["*"],
      config: {
        url,
        content_type: "json",
        insecure_ssl: "0"
      }
    };

    try {
      const result = await axios.post(route, CREATE_WEBHOOK_PAYLOAD, {
        headers: {
          Authorization: `Bearer ${key}`
        }
      });

      // tslint:disable-next-line:no-console
      console.log("result from create webhook api call: ", result.data);

      return result.data;
    } catch (e) {
      this.logger.error(
        "Error Creating the webhook for the users webhooks: " + e
      );
    }
  }

  /**
   * Delete a given webhook via the GitHub Webhooks API
   *
   * @param key
   * @param repository
   * @param webhookId
   */
  async destroy(key: string, repository: Repository, webhookId: number) {
    this.logger.log(
      `Deleting a webhook ${webhookId} for ${repository.owner}'s repository ${repository.name}`
    );
    const route = `${config.GITHUB_REST_URL}repos/${repository.owner}/${repository.name}/hooks/${webhookId}`;

    try {
      const result = await axios.delete(route, {
        headers: {
          Authorization: `Bearer ${key}`
        }
      });

      // tslint:disable-next-line:no-console
      console.log("result from delete webhook api call: ", result.data);

      return result.data;
    } catch (e) {
      this.logger.error(
        "Error Deleting the webhook for the users webhooks: " + e
      );
    }
  }

  /**
   * Handles receiving a GitHub Webhook Event, finding and calling the appropriate handler class
   * or logging an error of there was no corresponding class for the `eventType
   *
   *
   * @param repository
   * @param eventType
   * @param webhookEvent
   */
  public async handleEvent(
    repository: string,
    eventType: GitHubWebhookEventType,
    webhookEvent: any
  ) {
    // TODO: validate that repository is tracked.

    // TODO: validate the event came from GitHub

    this.logger.log(
      `Storing (${eventType}) Event for repository ${repository} ${Date.now()}`
    );

    let model;

    try {
      // model = await this.parseWebhookEventModel(repository, eventType, webhookEvent);
      model = await this.parserService.getWebhookEventHandlerInstance(
        repository,
        eventType,
        webhookEvent
      );
    } catch (e) {
      this.logger.error(
        `There was an error making the Model ${eventType} ${repository}`
      );
      // tslint:disable-next-line:no-console
      console.error(e);
      throw e;
    }

    // TODO: use the model to execute the webhook?

    const webhook = await this.webhooksRepository.store(
      "",
      repository,
      eventType,
      webhookEvent
    );

    const command = new HandleWebhookCommand(webhook.id);

    // passively execute the command
    await this.commandBus.execute(command);

    return webhook;
  }

  /**
   * Retrieves a count of the number of locally stored events for a given repository
   * @param repository
   */
  async eventCountForRepository(repository: string): Promise<number> {
    this.logger.log(
      `Retrieving the stored event count for repository ${repository}`
    );
	return -1;
    // return await this.repositoryWebhookModel.count({ repository });
  }
}
