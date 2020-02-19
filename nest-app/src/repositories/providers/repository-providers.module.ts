import { Module, DynamicModule } from '@nestjs/common';
import { RepositoryClientService } from './repository-client.service';
import { createRepositoryClientServiceProviders } from './repository-client-provider.providers';
import { GithubRepositoryClient } from './git-hub/GithubRepositoryClient';

@Module({
    imports: [],
    providers: [RepositoryClientService],
    exports: [RepositoryClientService]
})
export class RepositoryProvidersModule {
    static forRoot(): DynamicModule {
        const repositoryClientProviders = createRepositoryClientServiceProviders();
        return {
            module: RepositoryProvidersModule,
            providers: [RepositoryClientService, ...repositoryClientProviders],
            exports: [RepositoryClientService, ...repositoryClientProviders]
        };
    }
}
