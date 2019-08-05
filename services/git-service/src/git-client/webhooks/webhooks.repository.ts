import { ICreateRepositoryWebhookDto } from './ICreateRepositoryWebhookDto.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IRepositoryWebhook } from './IRepositoryWebhook.interface';

export interface IWebhookQuery {
	repository: string;
	eventType?: string;
}

@Injectable()
export class WebhooksRepository {
	constructor(
		@InjectModel('RepositoryWebhook')
		private readonly repositoryWebhookModel: Model<IRepositoryWebhook>
	) {}

	async getById(id: string): Promise<any> {
		return await this.repositoryWebhookModel.findById(id).exec();
	}

	async getAll(query: IWebhookQuery) {
		return await this.repositoryWebhookModel.find(query).exec();
	}

	async store(owner: string, repository: string, eventType: string, eventData: any) {
		const createWebhookDto: ICreateRepositoryWebhookDto = {
			repository,
			eventType,
			action: eventData.action ? eventData.action : eventType,
			data: eventData
		};
		const createdWebhookRecord = await this.repositoryWebhookModel.create(createWebhookDto);

		return createdWebhookRecord;
	}
}
