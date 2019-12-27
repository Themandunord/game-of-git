import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { WebhookProcessedEvent } from './webhook-processed.event';
import { Logger } from '@nestjs/common';

@EventsHandler(WebhookProcessedEvent)
export class WebhookProcessedHandler
    implements IEventHandler<WebhookProcessedEvent> {
    private readonly logger = new Logger('WebhookProcessedHandler');
    handle(event: WebhookProcessedEvent) {
        this.logger.log('Async WebhookProcessedEvent...');
    }
}
