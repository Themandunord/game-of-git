import { forwardRef, Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AppEventModule } from '../../../app-event/app-event.module';
import { PrismaModule } from '../../../prisma/prisma.module';
import ps from '../../../pubsub';
import { AppKeyModule } from '../app-key/app-key.module';
import { GitClientModule } from '../git-client.module';
import CommandHandlers from './commands';
import EventHandlers from './events';
import { ParserService } from './parser/parser.service';
import { WebhookEventsResolver } from './webhooks-events.resolver';
import { WebhooksController } from './webhooks.controller';
import { WebhooksService } from './webhooks.service';
import { WebhooksRepository } from './webhooks.repository';

@Module({
    imports: [
        forwardRef(() => GitClientModule),
        forwardRef(() => AppKeyModule),
        AppEventModule,
        CqrsModule,
        PrismaModule
    ],
    providers: [
        WebhooksRepository,
        WebhooksService,
        ParserService,
        WebhookEventsResolver,
        ...CommandHandlers,
        ...EventHandlers,
        {
            provide: 'PUB_SUB',
            useValue: ps
        }
    ],
    controllers: [WebhooksController],
    exports: [WebhooksService]
})
export class WebhooksModule {}
