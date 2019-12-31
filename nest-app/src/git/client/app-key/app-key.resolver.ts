import {
    User,
    AppKeyKeyArgs,
    AppKeyIdOrKeyArgs,
    UserIdOrEmailArgs
} from '@game-of-git/common';
import { GqlAuthGuard } from '../../../guards/gql-auth.guard';
import { UserEntity } from '../../../decorators/user.decorator';
import { AppKeyIsValid } from '@game-of-git/common';
import {
    Args,
    Mutation,
    Query,
    Resolver,
    Info,
    Context
} from '@nestjs/graphql';
import { AppKey } from '@game-of-git/common';
import { AppKeyService } from './app-key.service';
import { CreateAppKeyInput } from './dto/create-app-key.input';
import { UseGuards } from '@nestjs/common';

@Resolver(of => AppKey)
@UseGuards(GqlAuthGuard)
export class AppKeyResolver {
    constructor(private readonly appKeyService: AppKeyService) {}
    @Mutation(returns => AppKey)
    async createAppKey(
        @Args('data') data: CreateAppKeyInput,
        @UserEntity() user: User
    ) {
        const appKey = await this.appKeyService.store(data, user);

        const appKeyWithUser = {
            ...appKey,
            user: {
                gitLogin: user.gitLogin,
                id: user.id
            }
        };

        console.log('returning from createAppKey: ', appKeyWithUser);

        return appKeyWithUser;
    }
    @Query(returns => AppKey)
    async appKey(@Args() data: AppKeyIdOrKeyArgs) {
        return await this.appKeyService.getByIdOrKey(data);
    }
    @Query(returns => [AppKey])
    async userAppKeys(@Args() data: UserIdOrEmailArgs) {
        return await this.appKeyService.getAllByUserIdOrEmail(data);
    }

    @Mutation(returns => AppKey)
    async deleteAppKey(@Args() data: AppKeyIdOrKeyArgs) {
        return this.appKeyService.deleteByIdOrKey(data);
    }
    @Query(returns => AppKeyIsValid)
    async validateAppKey(
        @Args() data: AppKeyKeyArgs,
        @UserEntity() user: User
    ) {
        return {
            valid: await this.appKeyService.validate(data.appKey, user.gitLogin)
        };
    }
}
