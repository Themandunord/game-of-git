import { GitHubWebhookEventType } from './eventModels/EventType.types';
import { Injectable } from '@nestjs/common';
import EventModelFactory from './EventModelFactory';

@Injectable()
export class ParserService {
	/**
	 * Initializes and returns the WebhookEventHandler Instance for the given `eventType`
	 * or throws an error if the eventType is not found
	 *
	 *
	 * @param eventType
	 * @param webhookEvent
	 */
	async getWebhookEventHandlerInstance(
		repository: string,
		eventType: GitHubWebhookEventType,
		webhookEvent: any,
	) {
		const model = await EventModelFactory.makeModel(repository, eventType, webhookEvent);

		return model;
	}

	async getWebhookEventHandlerConstructor(eventType: GitHubWebhookEventType) {
		return EventModelFactory.getModelConstructor(eventType);
	}
}
