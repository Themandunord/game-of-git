import { Resolver, Subscription, Context } from '@nestjs/graphql';
import { PubSubEngine } from 'type-graphql';
import { AppEvent } from '@game-of-git/common';
import { Inject, ExecutionContext } from '@nestjs/common';

export const APP_EVENT_NAME = 'appEvent';

@Resolver(of => AppEvent)
export class AppEventResolver {
    constructor(@Inject('PUB_SUB') private pubSub: PubSubEngine) {}

    @Subscription(() => AppEvent, {
        name: APP_EVENT_NAME
    })
    async appEvent(@Context() context: ExecutionContext) {
        return this.pubSub.asyncIterator(APP_EVENT_NAME);
    }
}
