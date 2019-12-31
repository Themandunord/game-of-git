import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { PubSubEngine } from 'type-graphql';
import { APP_EVENT_NAME } from './app-event.resolver';

@Injectable()
export class AppEventService {
    constructor(@Inject('PUB_SUB') private pubSub: PubSubEngine) {}

    async sendAppEvent(data: any) {
        this.pubSub.publish(APP_EVENT_NAME, {
            appEvent: data
        });
    }
}
