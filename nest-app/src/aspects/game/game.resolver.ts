import { UserIdArgs } from './../../models/args/userid-args';
import { GameIdArgs } from './../../models/args/gameif-args';
import {
    Query,
    Resolver,
    Args,
    Info,
    Mutation,
    ResolveProperty,
    Parent
} from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { Game } from '../../models/game';

@Resolver(of => Game)
export class GameResolver {
    constructor(private readonly prisma: PrismaService) {}

    @Query(returns => Game)
    post(@Args() id: GameIdArgs) {
        return this.prisma.client.post({ id: id.postId });
    }

    @ResolveProperty('owner')
    owner(@Parent() game: Game) {
        return this.prisma.client.game({ id: game.id }).owner();
    }

    @ResolveProperty('repository')
    repository(@Parent() game: Game) {
        return this.prisma.client.game({ id: game.id }).repository();
    }

    @Query(returns => Game)
    game(@Args() id: GameIdArgs) {
        return this.prisma.client.game({ id: id.postId });
    }

    // @Query('games')
    // async getGames(@Args() args, @Info() info): Promise<Game[]> {
    //     return await this.prisma.client.games(args);
    // }

    // @Query('game')
    // async getGame(@Args() args, @Info() info): Promise<Game> {
    //     return await this.prisma.query.game(args, info);
    // }

    // @Mutation('createGame')
    // async createGame(@Args() args, @Info() info): Promise<Game> {
    //     return await this.prisma.mutation.createRepository(args, info);
    // }

    // @Mutation('updateGame')
    // async updateGame(@Args() args, @Info() info): Promise<Game> {
    //     return await this.prisma.mutation.updateGame(args, info);
    // }
}
