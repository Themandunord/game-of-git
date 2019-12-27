import { forwardRef, Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { RepositoriesController } from './repositories.controller';
import { RepositoriesResolver } from './repositories.resolver';
import { RepositoriesService } from './repositories.service';
import { GitClientModule } from '../git/client/git-client.module';
import { AppKeyModule } from '../git/client/app-key/app-key.module';
import { WebhooksModule } from '../git/client/webhooks/webhooks.module';

@Module({
    imports: [
        PrismaModule,
        forwardRef(() => GitClientModule)
        // forwardRef(() => AppKeyModule)
        // WebhooksModule
    ],
    providers: [RepositoriesService, RepositoriesResolver],
    controllers: [RepositoriesController]
})
export class RepositoriesModule {}
