import { AppKeyResolver } from './app-key.resolver';
import { UsersService } from './../users/users.service';
import { GitClientService } from './../git-client/git-client.service';
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { gql } from 'apollo-server-core';
import GET_APP_KEY from './GET_APP_GEY.gql';

@Injectable()
export class AppKeyService {
  constructor(
    @Inject(forwardRef(() => GitClientService))
    private readonly gitClient: GitClientService,
    private readonly usersService: UsersService,
    private readonly appKeyResolver: AppKeyResolver,
  ) {}

  /**
   * Get an AppKey by the user's id
   * @param user
   */
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

  /**
   * Validate a given key by checking a username
   * @param key
   * @param user
   */
  async validateKey(key: string, user: string) {
    const valid = await this.gitClient.testAppKey(key, user);

    return valid;
  }

  /**
   * Store a GitHub App Key for a user
   * @param key
   * @param user
   * @param name
   * @param username
   */
  async storeKey(key: string, user: string, name: string, username: string) {
    const isValid = await this.validateKey(key, username);
    if (!isValid) {
      // tslint:disable:no-console
      console.error('Key was invalid, not storing');

      return;
    }

    const existing = await this.appKeyResolver.getAppKey(
      {
        where: {
          key,
        },
      },
      GET_APP_KEY,
    );

    if (existing != null) {
      console.error('Key already existed!');

      return;
    }
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
    const result = await this.appKeyResolver.createAppKey(createPayload, GET_APP_KEY);

    return result;
  }
}
