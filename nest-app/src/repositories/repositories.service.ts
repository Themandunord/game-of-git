import { Injectable, Logger, forwardRef } from '@nestjs/common';
import { GraphqlService } from '../graphql/graphql.service';
import { ModuleRef } from '@nestjs/core';
import { User } from '@game-of-git/common';
import { ApiKeyService } from './entities/api-key/api-key.service';
import { ApiKeyModule } from './entities/api-key/api-key.module';
import repositoryProviderByKey from './providers/repositoryProviderClientByKey';

@Injectable()
export class RepositoriesService {
    private readonly logger = new Logger('RepositoriesService');

    constructor(
        private readonly gqlService: GraphqlService,
        private readonly apiKey: ApiKeyService,
        private readonly moduleRef: ModuleRef
    ) {}

    public async findRepositoryByName(user: Partial<User>, name: string) {
        this.logger.log(`findRepositoryByName ${name}`);

        const apiKeys = await this.apiKey.getApiKeysByUserId(user.id);
        console.log('retrieved apiKeys: ' + apiKeys.length);

        // providers are unique, so each api key can query one provider
        const repositories = Promise.all(
            apiKeys.map(async key => {
                const client = await repositoryProviderByKey(
                    this.moduleRef,
                    key.provider as any
                );
                // client.
            })
        );

        return [];
    }
}
