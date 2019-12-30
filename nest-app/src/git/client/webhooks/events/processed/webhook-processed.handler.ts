import { Logger } from '@nestjs/common';
import { EventBus, EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { SendAppEvent } from '../../../../../app-event/events/send-app-event';
import { WebhookProcessedEvent } from './webhook-processed.event';

@EventsHandler(WebhookProcessedEvent)
export class WebhookProcessedHandler
    implements IEventHandler<WebhookProcessedEvent> {
    constructor(private readonly eventBus: EventBus) {}

    private readonly logger = new Logger('WebhookProcessedHandler');
    handle(event: WebhookProcessedEvent) {
        this.logger.log(`Async WebhookProcessedEvent ${event.eventType}`);
        this.eventBus.publish(
            new SendAppEvent(`webhook-processed-${event.eventType}`, {
                eventType: event.eventType,
                repository: event.repositoryId
            })
        );
    }
}
