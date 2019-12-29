import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { PubSubEngine } from 'type-graphql';

@Injectable()
export class AppEventService {
    constructor(@Inject('PUB_SUB') private pubSub: PubSubEngine) {}

    async sendAppEvent(data: any) {
        this.pubSub.publish('appEvent', {
            appEvent: data
        });
    }
}
