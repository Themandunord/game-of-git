import { forwardRef, Module } from '@nestjs/common';

import { RepositoriesController } from './repositories.controller';
import { RepositoriesResolver } from './repositories.resolver';
import { RepositoriesService } from './repositories.service';
import { WebhooksModule } from '../git/client/webhooks/webhooks.module';
import ps from '../pubsub';

@Module({
    imports: [
        // forwardRef(() => GitClientModule)
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
