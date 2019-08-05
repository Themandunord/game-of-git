import { HandleWebhookHandler } from './commands/handle-webhook.handler';
import { GitClientModule } from './../git-client.module';
import { WebhooksController } from './webhooks.controller';
import { WebhooksService } from './webhooks.service';
import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { RepositoryWebhookSchema } from './RepositoryWebhook.schema';
import { AppKeyModule } from '../../app-key/app-key.module';
import { ParserService } from './parser/parser.service';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
	imports: [
		forwardRef(() => GitClientModule),
		forwardRef(() => AppKeyModule),
		MongooseModule.forFeature([{ name: 'RepositoryWebhook', schema: RepositoryWebhookSchema }]),
		CqrsModule
	],
	providers: [WebhooksService, ParserService, HandleWebhookHandler],
	controllers: [WebhooksController],
	exports: [WebhooksService]
})
export class WebhooksModule {}
