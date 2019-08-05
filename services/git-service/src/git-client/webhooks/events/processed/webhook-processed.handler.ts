import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { WebhookProcessedEvent } from './webhook-processed.event';

@EventsHandler(WebhookProcessedEvent)
export class WebhookProcessedHandler implements IEventHandler<WebhookProcessedEvent> {
	handle(event: WebhookProcessedEvent) {
		// tslint:disable:no-console
		console.log('Async WebhookProcessedEvent...');
	}
}
