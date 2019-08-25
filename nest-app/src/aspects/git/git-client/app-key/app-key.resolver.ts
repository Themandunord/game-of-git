import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AppKey } from '../../../../models/app-key';
import { AppKeyIdOrKeyArgs } from './../../../../models/args/appkeyidorkey-args';
import { UserIdOrEmailArgs } from './../../../../models/args/useridoremail-args';
import { AppKeyService } from './app-key.service';
import { CreateAppKeyInput } from './dto/create-app-key.input';
@Resolver(of => AppKey)
export class AppKeyResolver {
    constructor(private readonly appKeyService: AppKeyService) {}
    @Mutation(returns => AppKey)
    async createAppKey(@Args('data') data: CreateAppKeyInput) {
        console.log('create app key mutation call');
        // return this.prisma.client.createAppKey(data);
        return await this.appKeyService.store(data);
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
