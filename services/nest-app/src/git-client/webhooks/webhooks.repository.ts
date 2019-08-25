import { WebhookEventsResolver } from "./webhooks-events.resolver";
import { ICreateRepositoryWebhookDto } from "./ICreateRepositoryWebhookDto.interface";
import { Injectable } from "@nestjs/common";
import { IRepositoryWebhook } from "./IRepositoryWebhook.interface";
import { gql } from "apollo-server-core";

export interface IWebhookQuery {
  repository: string;
  eventType?: string;
}

@Injectable()
export class WebhooksRepository {
  constructor(
    // @InjectModel("RepositoryWebhook")
    // private readonly repositoryWebhookModel: Model<IRepositoryWebhook>,
    private readonly webhookEventsResolver: WebhookEventsResolver
  ) {}

  async getById(id: string): Promise<any> {
    // return await this.repositoryWebhookModel.findById(id).exec();
  }

  async getAll(query: IWebhookQuery) {
    // return await this.repositoryWebhookModel.find(query).exec();
  }

  async store(
    owner: string,
    repository: string,
    eventType: string,
    eventData: any
  ) {
    // console.log(repository);
    // console.log(eventType);
    const action = eventData.action ? eventData.action : eventType;
    // console.log(action);
    const createWebhookDto: ICreateRepositoryWebhookDto = {
      repository,
      eventType,
      action,
      data: eventData
    };
    // const createdWebhookRecord = await this.repositoryWebhookModel.create(
    //   createWebhookDto
    // );

    const createPayload = {
      data: {
        eventType,
        action,
        sender:
          eventData.sender && eventData.sender.login
            ? eventData.sender.login
            : "UNKNOWN",
        repository: {
          connect: {
            id: repository
          }
        }
      }
    };

    const createWebhookEventQuery = gql`
      query {
        id
        createdAt
        eventType
        action
        sender
      }
    `;

    const returnWebhook = await this.webhookEventsResolver.createWebhookEvent(
      createPayload,
      createWebhookEventQuery
    );

	return returnWebhook;

    // return createdWebhookRecord;
  }
}
