import {
    ApiKey,
    CreateApiKeyInput,
    User,
    RepositoryProviderTypes
} from '@game-of-git/common';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '../../../decorators/user.decorator';
import { GqlAuthGuard } from '../../../guards/gql-auth.guard';
import { ApiKeyService } from './api-key.service';

@Resolver(of => ApiKey)
export class ApiKeyResolver {
    constructor(private readonly apiKey: ApiKeyService) {}

    @Mutation(returns => ApiKey)
    @UseGuards(GqlAuthGuard)
    async createApiKey(
        @CurrentUser() user: User,
        @Args('data') data: CreateApiKeyInput
    ) {
        return await this.apiKey.createApiKey(user, data);
    }

    @Query(returns => Boolean)
    @UseGuards(GqlAuthGuard)
    async validateApiKey(
        @Args('key') key: string,
        @Args('provider') provider: RepositoryProviderTypes
    ) {
        return await this.apiKey.validateApiKey(key, provider);
    }
}
