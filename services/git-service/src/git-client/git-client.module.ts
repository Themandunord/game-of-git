import { AppKeyModule } from './../app-key/app-key.module';
import { Module, forwardRef } from '@nestjs/common';
import { GitClientService } from './git-client.service';
import { AppKeyService } from '../app-key/app-key.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [forwardRef(() => AppKeyModule)],
  providers: [GitClientService],
  exports: [GitClientService],
})
export class GitClientModule {}
