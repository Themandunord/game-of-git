import { User } from '@game-of-git/common';
import { ExecutionContext, Inject, UseGuards } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import {
    Context,
    Parent,
    Query,
    ResolveProperty,
    Resolver,
    Subscription
} from '@nestjs/graphql';
import * as camelcaseKeys from 'camelcase-keys';
import { PubSubEngine } from 'type-graphql';
import { CurrentUser } from '../decorators/user.decorator';
import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { ApiKeyService } from '../repositories/entities/api-key/api-key.service';
import { UserService } from './user.service';
import USER_MUTATED_EVENT_NAME from './USER_MUTATED_EVENT_NAME';

@Resolver(of => User)
export class UserResolver {
    public static USER_NOT_FOUND = 'User Not Found';

    constructor(
        @Inject('PUB_SUB') private pubSub: PubSubEngine,
        private readonly userService: UserService,
        private readonly moduleRef: ModuleRef,
        private readonly apiKeyService: ApiKeyService
    ) {}

    @UseGuards(GqlAuthGuard)
    @Query(returns => User)
    async me(@CurrentUser() user: User) {
        if (user.id) {
            return camelcaseKeys(await this.userService.getUserById(user.id));
        } else if (user.email) {
            return camelcaseKeys(
                await this.userService.getUserByEmail(user.email)
            );
        }
        return null;
    }

    @ResolveProperty('apiKeys')
    async apiKeys(@Parent() user: User) {
        return await (
            this.apiKeyService ??
            (await this.moduleRef.resolve(ApiKeyService)) ??
            (await this.moduleRef.create(ApiKeyService))
        ).getApiKeysByUserId(user.id);
    }

    @Subscription(() => User, {
        name: USER_MUTATED_EVENT_NAME
    })
    async userAdded(@Context() context: ExecutionContext) {
        console.log(`${USER_MUTATED_EVENT_NAME} subscription call!`, context);
        // return await this.prisma.$subscribe.user({node: {id: 'ck3p3akcx00190870db9mstdw'}});

        // TODO: switch to custom implementation instead of exposing backend
        return this.pubSub.asyncIterator(USER_MUTATED_EVENT_NAME);
    }
}
