import { HandleWebhookCommand } from './commands/HandleWebhookCommand';
import { CommandBus } from '@nestjs/cqrs';
import { ParserService } from './parser/parser.service';
import { GitHubWebhookEventType } from './parser/eventModels/EventType.types';
import { GitClientService } from './../git-client.service';
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import axios from 'axios';
import config from '../../config';
import { Repository } from 'src/graphql.schema';
import { AppKeyService } from '../../app-key/app-key.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { EventModelFactory } from './parser/EventModelFactory';
import { ALogger } from '../../../../common/utilities/ALogger';
import { AGitHubEvent } from './parser/eventModels/AGitHubEvent.abstract';
import { plainToClass } from 'class-transformer';

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

// tslint:disable:no-console

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
		private readonly parserService: ParserService,
		private readonly commandBus: CommandBus
	) {}

	/**
	 * Initialize required webhooks on a Repository via the GitHub Webhook API
	 *
	 * Once complete, the app should start receiving webhooks from GitHub. Initially a PING event.
	 *
	 * @param repository
	 * @param user
	 */
	async initializeRepositoryWebhooks(repository: Repository, user: string) {
		console.log(
			`Webhooks Service: Initializing Repository webhooks ${repository.owner} - ${repository.name} on behalf of ${user}`
		);

		const appKeys = await this.appKeyService.get(user);
		const appKey = appKeys.length > 0 ? appKeys[0].key : null;

		// TODO: Handle if there is no app key

		// check for existing webhooks for this repo, if they exist alreday we'll need to either update or delete them.
		// Implementation, TBD!
		// const existingWebhooks = await this.listWebhooks(repository, user);
		// console.log(`There are ${existingWebhooks.length} existing webhooks in this repository`);

		// create the webhook
		const result = await this.createWebhook(appKey, repository);
		console.log('Webhooks Service: result from webhook creation: ', result);

		// TODO: Error hnadling
	}

	/**
	 * Destroy all Game of Git Webhooks of a Repository using the GitHub Webhooks API
	 *
	 * Once complete the app should receive a webhook event for the deletion/unregistration of the webhook
	 *
	 * @param repository
	 * @param user
	 */
	async destroyRepositoryWebhooks(repository: Repository, user: string) {
		console.log(
			`Webhooks Service: Destroying Repository webhooks ${repository.owner} - ${repository.name} on behalf of ${user}`
		);

		const appKeys = await this.appKeyService.get(user);
		const appKey = appKeys.length > 0 ? appKeys[0].key : null;
		// check for existing webhooks for this repo, if they exist alreday we'll need to either update or delete them.
		// Implementation, TBD!
		const existingWebhooks = await this.listWebhooks(repository, user);
		console.log(
			`Webhooks Service: There are ${existingWebhooks.length} existing webhooks in this repository`
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
			`Webhooks Service: listing webhooks currently configured on the repository for user ${user} and repo ${repository.name}`
		);

		const appKeys = await this.appKeyService.get(user);
		const appKey = appKeys.length > 0 ? appKeys[0].key : null;

		const route = `${config.GITHUB_REST_URL}repos/${repository.owner}/${repository.name}/hooks`;
		console.log(`Webhooks Service: requesting ${route} with ${appKey}`);

		try {
			const result = await axios.get(route, {
				headers: {
					Authorization: `Bearer ${appKey}`
				}
			});

			return result.data;
		} catch (e) {
			console.error('Webhooks Service: Error Querying for the users webhooks: ' + e);
		}
	}

	/**
	 * Uses the GitHub Webhook API to create a new Webhook
	 *
	 * @param owner
	 * @param repository
	 */
	async createWebhook(key: string, repository: Repository) {
		console.log(
			`Webhooks Service: Creating a webhook for ${repository.owner}'s repository ${repository.name}`
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
				insecure_ssl: '0'
			}
		};

		try {
			const result = await axios.post(route, CREATE_WEBHOOK_PAYLOAD, {
				headers: {
					Authorization: `Bearer ${key}`
				}
			});

			console.log('Webhooks Service: result from create webhook api call: ', result.data);

			return result.data;
		} catch (e) {
			console.error(
				'Webhooks Service: Error Creating the webhook for the users webhooks: ' + e
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
	async deleteWebhook(key: string, repository: Repository, webhookId: number) {
		console.log(
			`Webhooks Service: Deleting a webhook ${webhookId} for ${repository.owner}'s repository ${repository.name}`
		);
		const route = `${config.GITHUB_REST_URL}repos/${repository.owner}/${repository.name}/hooks/${webhookId}`;

		try {
			const result = await axios.delete(route, {
				headers: {
					Authorization: `Bearer ${key}`
				}
			});

			console.log('Webhooks Service: result from delete webhook api call: ', result.data);

			return result.data;
		} catch (e) {
			console.error(
				'Webhooks Service: Error Deleting the webhook for the users webhooks: ' + e
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
		const payload: CreateRepositoryWebhookDto = {
			repository,
			eventType,
			action: webhookEvent.action ? webhookEvent.action : eventType,
			data: webhookEvent
		};
		// console.log(
		// 	`Webhooks Service: Storing (${eventType}) Event for repository ${repository} ${Date.now()}`
		// );

		let model;

		try {
			model = await this.parseWebhookEventModel(repository, eventType, webhookEvent);
		} catch (e) {
			console.error(`There was an error making the Model ${eventType} ${repository}`);
			console.error(e);
			throw e;
		}

		// save the event
		const webhook = await this.storeInMongo(payload);

		const command = new HandleWebhookCommand(repository, eventType, webhookEvent, model);

		// passively execute the command
		await this.commandBus.execute(command);

		return webhook;
	}

	/**
	 * Parses the webhook received from GitHub for a Repository
	 *
	 * @param repository
	 * @param eventType
	 * @param webhookEvent
	 */
	async parseWebhookEventModel(repository, eventType, webhookEvent) {
		return await EventModelFactory.makeModel(repository, eventType, webhookEvent);
	}

	/**
	 * Retrieves all stored webhooks of a repository
	 */
	async findAllInMongo(): Promise<IRepositoryWebhook[]> {
		console.log(`Webhooks Service: Retrieving all Webhook Events ${Date.now()}`);

		return await this.repositoryWebhookModel.find().exec();
	}

	/**
	 * Retrieves a count of the number of locally stored events for a given repository
	 * @param repository
	 */
	async eventCountForRepository(repository: string): Promise<number> {
		console.log(
			`Webhooks Service: Retrieving the stored event count for repository ${repository}`
		);

		return await this.repositoryWebhookModel.count({ repository });
	}

	private async storeInMongo(
		createRepositoryWebhookDto: CreateRepositoryWebhookDto
	): Promise<IRepositoryWebhook> {
		const createdRepositoryWebhook = await this.repositoryWebhookModel.create(
			createRepositoryWebhookDto
		);

		return createdRepositoryWebhook;
	}
}
