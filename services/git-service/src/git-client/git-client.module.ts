import { AppKeyModule } from './../app-key/app-key.module';
import { Module, forwardRef } from '@nestjs/common';
import { GitClientService } from './git-client.service';
import { WebhooksService } from './webhooks/webhooks.service';
import { WebhooksController } from './webhooks/webhooks.controller';
@Module({
  imports: [forwardRef(() => AppKeyModule)],
  providers: [GitClientService, WebhooksService],
  exports: [GitClientService],
  controllers: [WebhooksController],
})
export class GitClientModule {}
