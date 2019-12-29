import { Logger } from '@nestjs/common';
import { EventBus, EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { SendAppEvent } from '../../../../../app-event/events/send-app-event';
import { WebhookProcessingEvent } from './webhook-processing.event';

@EventsHandler(WebhookProcessingEvent)
export class WebhookProcessingHandler
    implements IEventHandler<WebhookProcessingEvent> {
    constructor(private readonly eventBus: EventBus) {}
    private readonly logger = new Logger('WebhookProcessingHandler');
    handle(event: WebhookProcessingEvent) {
        this.logger.log(`Async WebhookProcessingEvent ${event.eventType}`);
        this.eventBus.publish(
            new SendAppEvent(`webhook-processing-${event.eventType}`, {
                eventType: event.eventType,
                repository: event.repositoryId
            })
        );
    }
}
