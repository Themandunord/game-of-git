import { Module } from '@nestjs/common';
import ps from '../pubsub';
import { AppEventResolver } from './app-event.resolver';
import { AppEventService } from './app-event.service';
import EventHandlers from './events';

@Module({
    providers: [
        AppEventResolver,
        {
            provide: 'PUB_SUB',
            useValue: ps
        },
        AppEventService,
        ...EventHandlers
    ],
    exports: [AppEventService]
})
export class AppEventModule {}
