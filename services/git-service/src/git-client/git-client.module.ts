import { AppKeyModule } from './../app-key/app-key.module';
import { Module, forwardRef } from '@nestjs/common';
import { GitClientService } from './git-client.service';
import { WebhooksService } from './webhooks/webhooks.service';
import { WebhooksController } from './webhooks/webhooks.controller';
import { ParserService } from './webhooks/parser/parser.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RepositoryWebhookSchema } from './webhooks/RepositoryWebhook.schema';
@Module({
  imports: [
    forwardRef(() => AppKeyModule),
    MongooseModule.forFeature([{ name: 'RepositoryWebhook', schema: RepositoryWebhookSchema }]),
  ],
  providers: [GitClientService, WebhooksService, ParserService],
  exports: [GitClientService, WebhooksService],
  controllers: [WebhooksController],
})
export class GitClientModule {}
