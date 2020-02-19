import { Module, forwardRef } from '@nestjs/common';
import { RepositoriesResolver } from './repositories.resolver';
import { RepositoriesService } from './repositories.service';
import { GraphqlModule } from '../graphql/graphql.module';
import { RepositoryProvidersModule } from './providers/repository-providers.module';
import { ApiKeyModule } from './entities/api-key/api-key.module';
import { RepositoryModule } from './entities/repository/repository.module';

@Module({
    imports: [
        GraphqlModule,
        RepositoryProvidersModule.forRoot(),
        forwardRef(() => ApiKeyModule),
        RepositoryModule
    ],
    providers: [RepositoriesResolver, RepositoriesService]
})
export class RepositoriesModule {}
