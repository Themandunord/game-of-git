import { Query, Resolver, Args, Info, Mutation } from "@nestjs/graphql";
import { PrismaService } from "../prisma/prisma.service";
import { Game } from "../prisma/prisma.binding";

@Resolver("Game")
export class GameResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query("games")
  async getGames(@Args() args, @Info() info): Promise<Game[]> {
    return await this.prisma.query.games(args, info);
  }

  @Query("game")
  async getGame(@Args() args, @Info() info): Promise<Game> {
    return await this.prisma.query.game(args, info);
  }

  @Mutation("createGame")
  async createGame(@Args() args, @Info() info): Promise<Game> {
    return await this.prisma.mutation.createRepository(args, info);
  }

  @Mutation("updateGame")
  async updateGame(@Args() args, @Info() info): Promise<Game> {
    return await this.prisma.mutation.updateGame(args, info);
  }
}
