import { UsersService } from './../users/users.service';
import {
  Controller,
  Post,
  Body,
  Inject,
  forwardRef,
  HttpException,
  HttpStatus,
  Get,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  //   constructor(
  //     @Inject(forwardRef(() => UsersService))
  //     private readonly usersService: UsersService,
  //     private readonly authService: AuthService,
  //   ) {}

  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Get('token')
  async createToken(): Promise<any> {
    console.log('get token call');
    // return await this.authService.createToken();
  }

  //   @Post('register')
  //   async register(@Body() user: any): Promise<any> {
  //     return this.authService.register(user);
  //   }

  @Post('login')
  async login(@Body('email') email, @Body('password') password: string) {
    console.log(`Trying to login for ${email} with ${password}`);

    const user = await this.usersService.get(email);

    if (!user) {
      console.error(`user did not exist ${email}`);
      throw new HttpException(`Invalid Login`, HttpStatus.NOT_FOUND);
    }
    console.log(user);
    console.log(`validating password(${password} with ${user.hash})`);

    const passwordMatched = await this.authService.comparePassword(password, user.hash);

    console.log(`password match? ${passwordMatched}`);

    if (passwordMatched) {
      console.error(`wrong password provided for ${email}`);
      throw new HttpException(`Invalid Login`, HttpStatus.NOT_FOUND);
    }

    console.log(`Valid user ${email}, return authentication token.`);

    // authenticated, return jwt
    return await this.authService.createToken(user);
  }
}
