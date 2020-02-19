import {
    CreateApiKeyInput,
    RepositoryProviderTypes,
    User
} from '@game-of-git/common';
import { Injectable, Logger } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { GraphqlService } from '../../../graphql/graphql.service';
import repositoryProviderByKey from '../../providers/repositoryProviderClientByKey';

@Injectable()
export class ApiKeyService {
    private readonly logger = new Logger('ApiKeyService');
    constructor(
        private readonly gqlService: GraphqlService,
        private readonly moduleRef: ModuleRef
    ) {}

    /**
     * Creates an App Key for a User
     *
     * @param user
     * @param payload
     */
    public async createApiKey(user: Partial<User>, payload: CreateApiKeyInput) {
        this.logger.log(
            `Create Api Key for ${user.email} on ${payload.provider}`
        );
        const existingApiKeys = await this.gqlService.sdk.UserRepositoryApiKeys(
            {
                userId: user.id
            }
        );

        if (existingApiKeys.repository_api_keys.length > 0) {
            this.logger.log(
                `Api Key already existed for ${user.email} on ${payload.provider}`
            );
            return existingApiKeys.repository_api_keys[0];
        }
        const createdApiKey = await this.gqlService.sdk.CreateApiKey({
            key: payload.key,
            name: payload.name,
            provider: payload.provider,
            userId: user.id
        });
        return await createdApiKey.insert_repository_api_keys.returning[0];
    }

    public async getApiKeysByUserId(userId: string) {
        const apiKeysResponse = await this.gqlService.sdk.UserRepositoryApiKeys(
            {
                userId
            }
        );
        return apiKeysResponse.repository_api_keys;
    }

    public async validateApiKey(
        key: string,
        provider: RepositoryProviderTypes
    ) {
        const client = await repositoryProviderByKey(this.moduleRef, provider);
        return await client.apiKey.testApiKey(key);
    }
}
