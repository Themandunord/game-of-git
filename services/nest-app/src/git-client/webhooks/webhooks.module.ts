import { PrismaModule } from "./../../prisma/prisma.module";
import { forwardRef, Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { AppKeyModule } from "../app-key/app-key.module";
import { GitClientModule } from "./../git-client.module";
import { ParserService } from "./parser/parser.service";
import { RepositoryWebhookSchema } from "./RepositoryWebhook.schema";
import { WebhooksController } from "./webhooks.controller";
import { WebhooksService } from "./webhooks.service";
import { WebhooksRepository } from "./webhooks.repository";
import { WebhookEventsResolver } from "./webhooks-events.resolver";
import CommandHandlers from "./commands";
import EventHandlers from "./events";

@Module({
  imports: [
    forwardRef(() => GitClientModule),
    forwardRef(() => AppKeyModule),
    CqrsModule,
    PrismaModule
  ],
  providers: [
    WebhooksRepository,
    WebhooksService,
    ParserService,
    WebhookEventsResolver,
    ...CommandHandlers,
    ...EventHandlers
  ],
  controllers: [WebhooksController],
  exports: [WebhooksService]
})
export class WebhooksModule {}
