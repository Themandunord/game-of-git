import { WebhooksRepository } from './webhooks.repository';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import axios from 'axios';
import { Model } from 'mongoose';
import { Repository } from 'src/graphql.schema';
import { AppKeyService } from '../../app-key/app-key.service';
import config from '../../config';
import { GitClientService } from './../git-client.service';
import { HandleWebhookCommand } from './commands/handle-webhook.command';
import { ICreateRepositoryWebhookDto } from './ICreateRepositoryWebhookDto.interface';
import { IRepositoryWebhook } from './IRepositoryWebhook.interface';
import { EventModelFactory } from './parser/EventModelFactory';
import { GitHubWebhookEventType } from './parser/eventModels/EventType.types';
import { ParserService } from './parser/parser.service';
// tslint:disable:no-console

@Injectable()
export class WebhooksService {
	constructor(
		@Inject(forwardRef(() => GitClientService))
		private readonly gitClientService: GitClientService,
		@Inject(forwardRef(() => AppKeyService))
		private readonly appKeyService: AppKeyService,
		@InjectModel('RepositoryWebhook')
		private readonly repositoryWebhookModel: Model<IRepositoryWebhook>,
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
		const payload: ICreateRepositoryWebhookDto = {
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

		const webhook = await this.webhooksRepository.store(
			'',
			repository,
			eventType,
			webhookEvent
		);

		const command = new HandleWebhookCommand(webhook._id);

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
}
