import { forwardRef, Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { RepositoriesController } from './repositories.controller';
import { RepositoriesResolver } from './repositories.resolver';
import { RepositoriesService } from './repositories.service';
import { GitClientModule } from '../git/client/git-client.module';
import { AppKeyModule } from '../git/client/app-key/app-key.module';
import { WebhooksModule } from '../git/client/webhooks/webhooks.module';
import ps from '../pubsub';

@Module({
    imports: [
        PrismaModule,
        forwardRef(() => GitClientModule)
        // forwardRef(() => AppKeyModule)
        // WebhooksModule
    ],
    providers: [
        RepositoriesResolver,
        RepositoriesService,
        {
            provide: 'PUB_SUB',
            useValue: ps
        }
    ],
    controllers: [RepositoriesController],
    exports: [RepositoriesService]
})
export class RepositoriesModule {}
