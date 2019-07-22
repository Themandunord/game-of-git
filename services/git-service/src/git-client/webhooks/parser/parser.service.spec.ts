import { Test, TestingModule } from '@nestjs/testing';
import * as fs from 'fs';
import * as path from 'path';
import { EventModelFactory } from './EventModelFactory';
import { AGitHubEvent } from './eventModels/AGitHubEvent.abstract';
import { GitHubWebhookEvents } from './eventModels/EventType.constants';
import { GitHubWebhookEventType } from './eventModels/EventType.types';
import { ParserService } from './parser.service';

const GITHUB_WEBHOOK_EVENT_TYPES = Object.keys(GitHubWebhookEvents) as GitHubWebhookEventType[];

describe('ParserService', () => {
	let service: ParserService;

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [ParserService]
		}).compile();

		service = module.get<ParserService>(ParserService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	describe('Retrieving a WebhookEventHandler Instance for a Webhook', () => {
		it('Throws an error when trying to retrieve a model instance for an eventType that doesn\'t have a correspondong handler', async () => {
			const DEFINITELY_NOT_A_REAL_EVENT_TYPE = ('ScoobyDoobyDoo' +
				Date.now().toString()) as GitHubWebhookEventType;
			const webhookEventPayload = {};
			const fakeRepositoryId = '';

			await expect(
				service.getWebhookEventHandlerInstance(
					fakeRepositoryId,
					DEFINITELY_NOT_A_REAL_EVENT_TYPE,
					webhookEventPayload
				)
			).rejects.toThrowError(
				new RegExp(
					`.*${EventModelFactory.MAKE_MODEL_ERROR(DEFINITELY_NOT_A_REAL_EVENT_TYPE)}`
				)
			);
		});

		describe('Returns the valid and correct WebhookEventHandler Instance corresponding for all supported EventTypes', async () => {
			await Promise.all(
				GITHUB_WEBHOOK_EVENT_TYPES.map(async eventTypeKey => {
					describe(`${eventTypeKey}`, () => {
						let sampleJson: any;
						let expectedCtor: new (...args: any) => AGitHubEvent;

						const eventType = GitHubWebhookEvents[eventTypeKey];

						beforeAll(async () => {
							const SAMPLE_JSON_PATH = path.join(
								__dirname,
								`eventModels/${eventType}/sample.json`
							);

							const sampleJsonString = (await new Promise((resolve, reject) => {
								fs.readFile(SAMPLE_JSON_PATH, (err, data) => {
									if (err) {
										reject(err);
									}

									resolve(data);
								});
							})).toString();

							sampleJson = JSON.parse(sampleJsonString);

							expectedCtor = EventModelFactory.getModelConstructor(eventType);
						});

						it('Has a sample payload JSON file available for using as a mocked GitHub Webhook', async () => {
							expect(sampleJson).toBeInstanceOf(Object);
						});

						it('Can retrieve and initialize a corresponding Event Handler class instance for the given eventType', async () => {
							const resultModel = await service.getWebhookEventHandlerInstance(
								'',
								eventType,
								sampleJson
							);

							// result instance should be an instance of AGitHubEvent extended implementation
							expect(resultModel).toBeInstanceOf(AGitHubEvent);
							expect(resultModel).toBeInstanceOf(expectedCtor);
						});
					});
				})
			);
		});
	});
});
