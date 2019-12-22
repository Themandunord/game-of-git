import { WebhookEventsResolver } from './webhooks-events.resolver';
import { ICreateRepositoryWebhookDto } from './ICreateRepositoryWebhookDto.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IRepositoryWebhook } from './IRepositoryWebhook.interface';
import { gql } from 'apollo-server-core';

export interface IWebhookQuery {
    repository: string;
    eventType?: string;
}

@Injectable()
export class WebhooksRepository {
    constructor(
        // @InjectModel('RepositoryWebhook')
        // private readonly repositoryWebhookModel: Model<IRepositoryWebhook>,
        private readonly webhookEventsResolver: WebhookEventsResolver
    ) {}

    async getById(id: string): Promise<any> {
        // return await this.repositoryWebhookModel.findById(id).exec();
        return 'test';
    }

    async getAll(query: IWebhookQuery) {
        // return await this.repositoryWebhookModel.find(query).exec();
        return 'test';
    }

    async store(
        owner: string,
        repository: string,
        eventType: string,
        eventData: any
    ) {
        const action = eventData.action ? eventData.action : eventType;
        const createWebhookDto: ICreateRepositoryWebhookDto = {
            repository,
            eventType,
            action,
            data: eventData
        };
        const createPayload = {
            eventType,
            action,
            sender:
                eventData.sender && eventData.sender.login
                    ? eventData.sender.login
                    : 'UNKNOWN',
            repository
        };

        const created = await this.webhookEventsResolver.create(createPayload);

        return created;
    }
}
