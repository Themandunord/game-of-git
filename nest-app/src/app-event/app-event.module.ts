import { Module, forwardRef } from '@nestjs/common';
import { AppEventResolver } from './app-event.resolver';
import { AppEventService } from './app-event.service';
import ps from '../pubsub';
import EventHandlers from './events';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
    // imports: [forwardRef(() => CqrsModule)],
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
