import { Injectable } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { GET_USERS } from './GET_USERS.gql';

@Injectable()
export class UsersService {
  constructor(private readonly usersResolver: UsersResolver) {}

  public async getById(id: string) {
    const whoami = await this.usersResolver.getUser(
      {
        where: {
          id,
        },
      },
      GET_USERS,
    );

    const result = {
      email: whoami.email,
      id: whoami.id,
      hasAppKey: whoami.keys && whoami.keys.length > 0 ? true : false,
      name: whoami.name,
      gitLogin: whoami.gitLogin,
    };

    return result;
  }

  public async getAll() {
    return await this.usersResolver.getUsers({}, GET_USERS);
  }

  public async get(email: string) {
    const user = await this.usersResolver.getUser(
      {
        where: {
          email,
        },
      },
      GET_USERS,
    );

    const result = {
      email: user.email,
      id: user.id,
      hash: user.hash,
      hasAppKey: user.keys && user.keys.length > 0 ? true : false,
      name: user.name,
      gitLogin: user.gitLogin,
    };

    return result;
  }
}
