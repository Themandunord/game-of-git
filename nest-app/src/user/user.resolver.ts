import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { PrismaService } from '../prisma/prisma.service';
import {
    Root,
    Resolver,
    Query,
    ResolveProperty,
    Parent,
    Subscription,
    Args,
    Info,
    Context
} from '@nestjs/graphql';
import { UseGuards, Inject, ExecutionContext } from '@nestjs/common';
import { UserEntity } from '../decorators/user.decorator';
import { User } from '@game-of-git/common';
import { AppKey } from '@game-of-git/common';
import { PubSubEngine } from 'type-graphql';

const USER_MUTATED_EVENT_NAME = 'userMutated';

@Resolver(of => User)
// @UseGuards(GqlAuthGuard)
export class UserResolver {
    constructor(
        private prisma: PrismaService,
        @Inject('PUB_SUB') private pubSub: PubSubEngine
    ) {}

    @Query(returns => User)
    @UseGuards(GqlAuthGuard)
    async me(@UserEntity() user: User): Promise<User> {
        console.log('me call', user);
        this.pubSub.publish(USER_MUTATED_EVENT_NAME, {
            [USER_MUTATED_EVENT_NAME]: {
                id: '1',
                name: 'test',
                email: 'tests',
                gitLogin: 'testse'
            }
        });
        console.log('returning user: ', user);
        return user;
    }

    // @ResolveProperty('posts')
    // posts(@Parent() author: User): Promise<Post[]> {
    //     return this.prisma.client.user({ id: author.id }).posts();
    // }

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
