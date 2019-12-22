import { User } from '../../../models/user';
import { GqlAuthGuard } from '../../../guards/gql-auth.guard';
import { UserEntity } from '../../../decorators/user.decorator';
import { AppKeyKeyArgs } from '../../../models/args/appkeykey-args';
import { AppKeyIsValid } from '../../../models/app-key';
import {
    Args,
    Mutation,
    Query,
    Resolver,
    Info,
    Context
} from '@nestjs/graphql';
import { AppKey } from '../../../models/app-key';
import { AppKeyIdOrKeyArgs } from '../../../models/args/appkeyidorkey-args';
import { UserIdOrEmailArgs } from '../../../models/args/useridoremail-args';
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
        return await this.appKeyService.store(data, user);
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

    // @Mutation(returns => AppKey)
    // async createAppKey(@Args('data') { user, key, name }: CreateAppKeyInput) {
    //     // return await this.appKeyService.create;
    // }

    // @ResolveProperty('user')
    // user(@Parent() appKey: AppKey) {
    //     return this.appKeyService.getById(data.Id)
    //     // return this.prisma.client.appKey({ id: appKey.id }).user();
    // }
    // @Query('appKeys')
    // async getAppKeys(@Args() args, @Info() info): Promise<AppKey[]> {
    //     return await this.prisma.query.appKeys(args, info);
    // }
    // @Query('appKey')
    // async getAppKey(@Args() args, @Info() info): Promise<AppKey> {
    //     return await this.prisma.query.appKey(args, info);
    // }
    // @Mutation('updateAppKey')
    // async updateAppKey(@Args() args, @Info() info): Promise<AppKey> {
    //     return await this.prisma.mutation.updateAppKey(args, info);
    // }
}
