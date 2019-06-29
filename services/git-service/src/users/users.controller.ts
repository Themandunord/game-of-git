import { AppKeyService } from './../app-key/app-key.service';
import { UsersResolver } from './users.resolver';
import { Controller, Get, Put, Body, Post, Req, Param } from '@nestjs/common';
// import { gql } from 'apollo-server-core';
import { AuthService } from '../auth/auth.service';
import { GET_USERS } from './GET_USERS.gql';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersResolver: UsersResolver,
    private readonly authService: AuthService,
    private readonly appKeyService: AppKeyService,
  ) {}

  @Get()
  async findAll() {
    return this.usersResolver.getUsers({}, GET_USERS);
  }

  @Get(['whoami/:id', ':id/data'])
  async whoAmI(@Req() request, @Param('id') id) {
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

  @Put('/add-key')
  async addAppKey(
    @Body('username') username: string,
    @Body('key') key: string,
    @Body('name') name: string,
    @Body('user') user: string,
  ) {
    return await this.appKeyService.storeKey(key, user, name, username);
  }

  @Post('/validate-key')
  async validateKey(@Body('key') key: string, @Body('username') user: string) {
    console.log(`VALIDATE KEY:  ${key} ${user}`);

    return await this.appKeyService.validateKey(key, user);
  }

  @Put()
  async upsertRetrieval(
    @Body('email') email,
    @Body('password') password: string,
    @Body('appKey') appKey = null,
  ) {
    console.log('Trying to retrieve existing user ' + email + ' ' + password + ' ' + appKey);
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
