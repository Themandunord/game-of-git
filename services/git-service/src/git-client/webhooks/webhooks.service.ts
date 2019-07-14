import { GitHubWebhookEventTypes } from './parser/eventModels/EventType.types';
import { GitClientService } from './../git-client.service';
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import axios from 'axios';
import config from '../../config';
import { Repository } from 'src/graphql.schema';
import { AppKeyService } from '../../app-key/app-key.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import EventModelFactory from './parser/EventModelFactory';

export interface IRepositoryWebhook extends Document {
	repository: string;
	eventType: string;
	action: string;
	date: Date;
	data: any;
}

export interface CreateRepositoryWebhookDto {
	repository: string;
	eventType: string;
	action: string;
	date?: Date;
	data: any;
}

@Injectable()
export class WebhooksService {
	constructor(
		@Inject(forwardRef(() => GitClientService))
		private readonly gitClientService: GitClientService,
		@Inject(forwardRef(() => AppKeyService))
		private readonly appKeyService: AppKeyService,
		// @Inject(forwardRef(() => MongoService))
		// private readonly mongoService: MongoService,
		@InjectModel('RepositoryWebhook')
		private readonly repositoryWebhookModel: Model<IRepositoryWebhook>,
	) {}

	async initializeRepositoryWebhooks(repository: Repository, user: string) {
		console.log(
			`Webhooks Service: Initializing Repository webhooks ${repository.owner} - ${repository.name} on behalf of ${user}`,
		);

		const appKeys = await this.appKeyService.get(user);
		const appKey = appKeys.length > 0 ? appKeys[0].key : null;
		// check for existing webhooks for this repo, if they exist alreday we'll need to either update or delete them.
		// Implementation, TBD!
		// const existingWebhooks = await this.listWebhooks(repository, user);
		// console.log(`There are ${existingWebhooks.length} existing webhooks in this repository`);

		// create the webhook
		const result = await this.createWebhook(appKey, repository);
		console.log('Webhooks Service: result from webhook creation: ', result);
	}

	async destroyRepositoryWebhooks(repository: Repository, user: string) {
		console.log(
			`Webhooks Service: Destroying Repository webhooks ${repository.owner} - ${repository.name} on behalf of ${user}`,
		);

		const appKeys = await this.appKeyService.get(user);
		const appKey = appKeys.length > 0 ? appKeys[0].key : null;
		// check for existing webhooks for this repo, if they exist alreday we'll need to either update or delete them.
		// Implementation, TBD!
		const existingWebhooks = await this.listWebhooks(repository, user);
		console.log(
			`Webhooks Service: There are ${existingWebhooks.length} existing webhooks in this repository`,
		);

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
		console.log(
			`Webhooks Service: listing webhooks currently configured on the repository for user ${user} and repo ${repository.name}`,
		);

		const appKeys = await this.appKeyService.get(user);
		const appKey = appKeys.length > 0 ? appKeys[0].key : null;

		const route = `${config.GITHUB_REST_URL}repos/${repository.owner}/${repository.name}/hooks`;
		console.log(`Webhooks Service: requesting ${route} with ${appKey}`);

		try {
			const result = await axios.get(route, {
				headers: {
					Authorization: `Bearer ${appKey}`,
				},
			});

			return result.data;
		} catch (e) {
			console.error('Webhooks Service: Error Querying for the users webhooks: ' + e);
		}
	}

	/**
	 * Uses the GitHub Webhook API to create a new Webhook
	 * @param owner
	 * @param repository
	 */
	async createWebhook(key: string, repository: Repository) {
		console.log(
			`Webhooks Service: Creating a webhook for ${repository.owner}'s repository ${repository.name}`,
		);
		// throw new Error(`Net yet configured`);
		const route = `${config.GITHUB_REST_URL}repos/${repository.owner}/${repository.name}/hooks`;
		const url = `${process.env.GIT_SERVICE_DOMAIN}/webhook/${repository.id}`;
		console.log(`Webhooks Service: requesting from ${route} webhook url = ${url}`);

		const CREATE_WEBHOOK_PAYLOAD = {
			name: 'web',
			active: true,
			events: ['*'],
			config: {
				url,
				content_type: 'json',
				insecure_ssl: '0',
			},
		};

		try {
			const result = await axios.post(route, CREATE_WEBHOOK_PAYLOAD, {
				headers: {
					Authorization: `Bearer ${key}`,
				},
			});

			console.log('Webhooks Service: result from create webhook api call: ', result.data);

			return result.data;
		} catch (e) {
			console.error(
				'Webhooks Service: Error Creating the webhook for the users webhooks: ' + e,
			);
		}
	}

	async deleteWebhook(key: string, repository: Repository, webhookId: number) {
		console.log(
			`Webhooks Service: Deleting a webhook ${webhookId} for ${repository.owner}'s repository ${repository.name}`,
		);
		const route = `${config.GITHUB_REST_URL}repos/${repository.owner}/${repository.name}/hooks/${webhookId}`;

		try {
			const result = await axios.delete(route, {
				headers: {
					Authorization: `Bearer ${key}`,
				},
			});

			console.log('Webhooks Service: result from delete webhook api call: ', result.data);

			return result.data;
		} catch (e) {
			console.error(
				'Webhooks Service: Error Deleting the webhook for the users webhooks: ' + e,
			);
		}
	}

	public async storeEvent(
		repository: string,
		eventType: GitHubWebhookEventTypes,
		webhookEvent: any,
	) {
		const payload: CreateRepositoryWebhookDto = {
			repository,
			eventType,
			action: webhookEvent.action ? webhookEvent.action : eventType,
			data: webhookEvent,
		};
		console.log(
			`Webhooks Service: Storing (${eventType}) Event for repository ${repository} ${Date.now()}`,
		);

		// WIP: in development
		try {
			const model = this.parseAndStoreWebhookEventModel(repository, eventType, webhookEvent);
			console.log('Retrieved model in webhooks service: ', model);
		} catch (e) {
			console.error(`There was an error making the Model ${eventType} ${repository}`);
		}

		return await this.create(payload);
	}

	async parseAndStoreWebhookEventModel(repository, eventType, webhookEvent) {
		return await EventModelFactory.makeModel(eventType, repository, webhookEvent);
	}

	private async create(
		createRepositoryWebhookDto: CreateRepositoryWebhookDto,
	): Promise<IRepositoryWebhook> {
		const createdRepositoryWebhook = new this.repositoryWebhookModel(
			createRepositoryWebhookDto,
		);

		return await createdRepositoryWebhook.save();
	}

	async findAll(): Promise<IRepositoryWebhook[]> {
		console.log(`Webhooks Service: Retrieving all Webhook Events ${Date.now()}`);

		return await this.repositoryWebhookModel.find().exec();
	}

	async eventCountForRepository(repository: string): Promise<number> {
		console.log(
			`Webhooks Service: Retrieving the stored event count for repository ${repository}`,
		);

		return await this.repositoryWebhookModel.count({ repository });
	}
}
