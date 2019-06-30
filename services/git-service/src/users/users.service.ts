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

  public async upsertRetrieval(email: string, password: string, appKey: string) {
    const existingUser = await this.usersResolver.getUser(
      {
        where: {
          email,
        },
      },
      GET_USERS,
    );
    console.log('Retrieved user');

    if (!existingUser) {
      console.log('Trying to create user');
      const hashedPassword = await this.authService.encryptPassword(password);
      const user = await this.usersResolver.createUser(
        {
          data: {
            email,
            password: hashedPassword,
          },
        },
        GET_USERS,
      );
      console.log('returining new user');

      return user;
    }
    console.log('returning existing user');

    return existingUser;
  }
}
