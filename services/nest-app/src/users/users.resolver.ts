import { Args, Info, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PrismaService } from "../prisma/prisma.service";
import { User } from "../prisma/prisma.binding";

@Resolver("Users")
export class UsersResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query("users")
  async getUsers(@Args() args, @Info() info): Promise<User[]> {
    return await this.prisma.query.users(args, info);
  }

  @Query("user")
  async getUser(@Args() args, @Info() info): Promise<User> {
    return await this.prisma.query.user(args, info);
  }

  @Mutation("createUser")
  async createUser(@Args() args, @Info() info): Promise<User> {
    return await this.prisma.mutation.createUser(args, info);
  }

  @Mutation("updateUser")
  async updateUser(@Args() args, @Info() info): Promise<User> {
    return await this.prisma.mutation.updateUser(args, info);
  }
}
