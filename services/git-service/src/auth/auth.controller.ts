import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { UsersService } from './../users/users.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  //   @Get('token')
  //   async createToken(): Promise<any> {
  // tslint:disable:no-console
  // console.log('get token call');
  // return await this.authService.createToken();
  //   }

  //   @Post('register')
  //   async register(@Body() user: any): Promise<any> {
  //     return this.authService.register(user);
  //   }

  @Post('login')
  async login(@Body('email') email, @Body('password') password: string) {
    console.log(`Auth Controller: Trying to login for ${email} with ${password}`);

    const user = await this.usersService.get(email);

    if (!user) {
      console.error(`user did not exist ${email}`);
      throw new HttpException(`Invalid Login`, HttpStatus.NOT_FOUND);
    }
    const passwordMatched = await this.authService.comparePassword(password, user.hash);
    if (passwordMatched) {
      console.error(`Auth Controller: wrong password provided for ${email}`);
      throw new HttpException(`Invalid Login`, HttpStatus.NOT_FOUND);
    }

    console.log(`Auth Controller: Valid user ${email}, return authentication token.`);

    return await this.authService.createToken(user);
  }
}
