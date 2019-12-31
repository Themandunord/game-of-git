import { AppKey, User } from '@game-of-git/common';
import {
    ExecutionContext,
    Inject,
    UseGuards,
    NotFoundException
} from '@nestjs/common';
import {
    Context,
    Parent,
    Query,
    ResolveProperty,
    Resolver,
    Subscription
} from '@nestjs/graphql';
import { PubSubEngine } from 'type-graphql';
import { UserEntity } from '../decorators/user.decorator';
import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { PrismaService } from '../prisma/prisma.service';
import { USER_MUTATED_EVENT_NAME } from './user.internal.resolver';

@Resolver(of => User)
// @UseGuards(GqlAuthGuard)
export class UserResolver {
    public static USER_NOT_FOUND = 'User Not Found';

    constructor(
        private prisma: PrismaService,
        @Inject('PUB_SUB') private pubSub: PubSubEngine
    ) {}

    @Query(returns => User)
    @UseGuards(GqlAuthGuard)
    async me(@UserEntity() user: User): Promise<User> {
        let userArgs = {};
        if (user.id) {
            userArgs = {
                id: user.id
            };
        } else if (user.email) {
            userArgs = {
                email: user.email
            };
        }

        const userData = await this.prisma.client.user(userArgs);

        if (!userData) {
            throw new NotFoundException(UserResolver.USER_NOT_FOUND);
        }
        const keys = await this.prisma.client.user(userArgs).keys();
        const meData = {
            ...user,
            ...userData,
            appKeys: keys as AppKey[]
        };
        return meData as User;
    }

    @ResolveProperty('appKeys')
    appKeys(@Parent() owner: User): Promise<AppKey[]> {
        return this.prisma.client.user({ id: owner.id }).keys();
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
