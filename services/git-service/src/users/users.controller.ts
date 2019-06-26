import { UsersResolver } from './users.resolver';
import { Controller, Get, Put, Body, Post } from '@nestjs/common';
import { gql } from 'apollo-server-core';
import { AuthService } from '../auth/auth.service';
import { GET_USERS } from './GET_USERS.gql';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersResolver: UsersResolver,
    private readonly authService: AuthService,
  ) {}

  @Get()
  async findAll() {
    return this.usersResolver.getUsers({}, GET_USERS);
  }

  @Put()
  async upsertRetrieval(
    @Body('email') email,
    @Body('password') password: string,
    @Body('appKey') appKey = null,
  ) {
    console.log(
      'Trying to retrieve existing user ' +
        email +
        ' ' +
        password +
        ' ' +
        appKey,
    );
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
