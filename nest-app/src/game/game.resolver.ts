import {
    CreateGameInput,
    Game,
    GameIdArgs,
    UserIdArgs,
    User
} from '@game-of-git/common';
import {
    Query,
    Resolver,
    Args,
    Info,
    Mutation,
    ResolveProperty,
    Parent
} from '@nestjs/graphql';

import { UseGuards, Logger } from '@nestjs/common';
import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { GameService } from './game.service';
import { CurrentUser } from '../decorators/user.decorator';

@Resolver(of => Game)
export class GameResolver {
    private readonly logger = new Logger('GameResolver');

    constructor(private readonly gameService: GameService) {}

    // old, unconverted below

    @Query(returns => Game)
    post(@Args() id: GameIdArgs) {
        // return this.prisma.client.post({ id: id.postId });
    }

    @ResolveProperty('owner')
    owner(@Parent() game: Game) {
        // return this.prisma.client.game({ id: game.id }).owner();
    }

    @ResolveProperty('repository')
    repository(@Parent() game: Game) {
        // return this.prisma.client.game({ id: game.id }).repository();
    }

    @Query(returns => Game)
    game(@Args() id: GameIdArgs) {
        // return this.prisma.client.game({ id: id.postId });
    }

    @Mutation(returns => Game)
    @UseGuards(GqlAuthGuard)
    async createGame(
        @CurrentUser() user: User,
        @Args('data') createGameInput: CreateGameInput
    ) {
        this.logger.log('createGame');

        return this.gameService.createGame(user, createGameInput);
    }

    @Mutation(returns => Game)
    @UseGuards(GqlAuthGuard)
    async endGame(@CurrentUser() user: User, @Args('data') gameId: string) {
        this.logger.log('endGame');
        return this.gameService.endGame(user, gameId);
    }
}
