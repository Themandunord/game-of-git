import { AppKeyResolver } from './app-key.resolver';
import { UsersService } from './../users/users.service';
import { GitClientService } from './../git-client/git-client.service';
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { gql } from 'apollo-server-core';

export const GET_APP_KEY = gql`
  query {
    id
    user {
      id
      email
      name
      role
    }
    key
    name
  }
`;

@Injectable()
export class AppKeyService {
  constructor(
    @Inject(forwardRef(() => GitClientService))
    private readonly gitClient: GitClientService,
    private readonly usersService: UsersService,
    private readonly appKeyResolver: AppKeyResolver,
  ) {}

  async get(user: string) {
    const keys = await this.appKeyResolver.getAppKeys(
      {
        where: {
          user: {
            id: user,
          },
        },
      },
      GET_APP_KEY,
    );

    return keys;
  }

  async validateKey(key: string, user: string) {
    const valid = await this.gitClient.testAppKey(key, user);

    return valid;
  }

  async storeKey(key: string, user: string, name: string, username: string) {
    console.log(`Store key ${key} ${user} ${name} ${username}`);
    const isValid = await this.validateKey(key, username);
    if (!isValid) {
      console.log('invalid, not storing');

      return;
    }
    console.log('valid, storing');
    // this.usersService.
    const existing = await this.appKeyResolver.getAppKey(
      {
        where: {
          key,
        },
      },
      GET_APP_KEY,
    );

    if (existing != null) {
      console.log('Key already existed!');

      return;
    }
    console.log('key did not exist already, adding new key!');
    const createPayload = {
      data: {
        user: {
          connect: {
            id: user,
          },
        },
        name,
        key,
      },
    };
    console.log('calling createAppKEy with ', createPayload, GET_APP_KEY);
    const result = await this.appKeyResolver.createAppKey(createPayload, GET_APP_KEY);

    return result;
  }
}
