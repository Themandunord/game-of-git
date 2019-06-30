import { AppKeyModule } from './../app-key/app-key.module';
import { Module, forwardRef } from '@nestjs/common';
import { GitClientService } from './git-client.service';
@Module({
  imports: [forwardRef(() => AppKeyModule)],
  providers: [GitClientService],
  exports: [GitClientService],
})
export class GitClientModule {}
