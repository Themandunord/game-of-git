import { AppKeyModule } from './../app-key/app-key.module';
import { GitClientModule } from './../git-client/git-client.module';
import { Module, forwardRef } from '@nestjs/common';
import { RepositoriesService } from './repositories.service';
import { RepositoriesController } from './repositories.controller';
import { RepositoriesResolver } from './repositories.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule, forwardRef(() => GitClientModule), forwardRef(() => AppKeyModule)],
  providers: [RepositoriesService, RepositoriesResolver],
  controllers: [RepositoriesController],
})
export class RepositoriesModule {}
