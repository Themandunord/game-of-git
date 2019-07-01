import { AppKeyModule } from './../app-key/app-key.module';
import { Module, forwardRef } from '@nestjs/common';
import { GitClientService } from './git-client.service';
import { WebhooksService } from './webhooks/webhooks.service';
@Module({
  imports: [forwardRef(() => AppKeyModule)],
  providers: [GitClientService, WebhooksService],
  exports: [GitClientService],
})
export class GitClientModule {}
