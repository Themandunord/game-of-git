import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { AppKeyService } from './../app-key/app-key.service';
import { GET_USERS } from './GET_USERS.gql';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
    private readonly appKeyService: AppKeyService,
  ) {}

  @Get()
  async findAll() {
    return await this.usersService.getAll();
  }

  @Get(['whoami/:id', ':id/data'])
  async whoAmI(@Req() request, @Param('id') id) {
    return await this.usersService.getById(id);
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

    return await this.usersService.upsertRetrieval(email, password, appKey);
  }
}
