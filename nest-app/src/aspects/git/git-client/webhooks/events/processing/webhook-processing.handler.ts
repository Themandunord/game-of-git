import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { WebhookProcessingEvent } from './webhook-processing.event';
import { Logger } from '@nestjs/common';

@EventsHandler(WebhookProcessingEvent)
export class WebhookProcessingHandler
    implements IEventHandler<WebhookProcessingEvent> {
    private readonly logger = new Logger('WebhookProcessingHandler');
    handle(event: WebhookProcessingEvent) {
        // tslint:disable:no-console
        this.logger.log('Async WebhookProcessingEvent...');
    }
}
