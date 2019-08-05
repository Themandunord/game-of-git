import { forwardRef, Module } from '@nestjs/common';
import { AppKeyModule } from './../app-key/app-key.module';
import { GitClientService } from './git-client.service';
import { ParserService } from './webhooks/parser/parser.service';
import { WebhooksModule } from './webhooks/webhooks.module';
@Module({
	imports: [forwardRef(() => AppKeyModule), forwardRef(() => WebhooksModule)],
	providers: [GitClientService, ParserService],
	exports: [GitClientService]
})
export class GitClientModule {}
