import { AppKeyModule } from './../app-key/app-key.module';
import { Module, forwardRef } from '@nestjs/common';
import { GitClientService } from './git-client.service';
import { WebhooksService } from './webhooks/webhooks.service';
import { WebhooksController } from './webhooks/webhooks.controller';
import { ParserService } from './webhooks/parser/parser.service';
@Module({
  imports: [forwardRef(() => AppKeyModule)],
  providers: [GitClientService, WebhooksService, ParserService],
  exports: [GitClientService],
  controllers: [WebhooksController],
})
export class GitClientModule {}
