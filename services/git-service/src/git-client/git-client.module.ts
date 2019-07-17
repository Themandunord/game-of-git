import { AppKeyModule } from './../app-key/app-key.module';
import { Module, forwardRef } from '@nestjs/common';
import { GitClientService } from './git-client.service';
import { WebhooksService } from './webhooks/webhooks.service';
import { WebhooksController } from './webhooks/webhooks.controller';
import { ParserService } from './webhooks/parser/parser.service';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { RepositoryWebhookSchema } from './webhooks/RepositoryWebhook.schema';
import { WebhooksModule } from './webhooks/webhooks.module';
@Module({
	imports: [
		forwardRef(() => AppKeyModule),
		// MongooseModule.forFeature([{ name: 'RepositoryWebhook', schema: RepositoryWebhookSchema }]),
		// forwardRef(() => WebhooksModule),
		forwardRef(() => WebhooksModule),
		// MongooseModule.forRoot(),
	],
	providers: [
		// WebhooksService,
		GitClientService,
		ParserService,
		// {
		// 	provide: getModelToken('RepositoryWebhook'),
		// 	useValue: RepositoryWebhookSchema,
		// },
	],
	exports: [GitClientService],
	// controllers: [WebhooksController],
})
export class GitClientModule {}
