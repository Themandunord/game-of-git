import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { WebhookProcessingEvent } from './webhook-processing.event';

@EventsHandler(WebhookProcessingEvent)
export class WebhookProcessingHandler implements IEventHandler<WebhookProcessingEvent> {
	handle(event: WebhookProcessingEvent) {
		// tslint:disable:no-console
		console.log('Async WebhookProcessingEvent...');
	}
}
