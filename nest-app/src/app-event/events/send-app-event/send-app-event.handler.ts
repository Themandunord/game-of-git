import { Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AppEventService } from '../../../app-event/app-event.service';
import { SendAppEvent } from './send-app-event.event';

@EventsHandler(SendAppEvent)
export class SendAppEventHandler implements IEventHandler<SendAppEvent> {
    constructor(private readonly appEventService: AppEventService) {}

    private readonly logger = new Logger('SendAppEventHandler');
    handle(event: SendAppEvent) {
        this.logger.log(`Async SendAppEvent ${event.type}`);
        this.appEventService.sendAppEvent({
            type: `${event.type}`,
            data: JSON.stringify(event.data)
        });
    }
}
