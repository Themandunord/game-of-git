import { Injectable } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { GET_USERS } from './GET_USERS.gql';

@Injectable()
export class UsersService {
  constructor(private readonly usersResolver: UsersResolver) {}

  public async get(email: string) {
    const user = this.usersResolver.getUser(
      {
        where: {
          email,
        },
      },
      GET_USERS,
    );

    return user;
  }
}
