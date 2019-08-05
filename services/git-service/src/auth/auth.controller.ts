import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { UsersService } from './../users/users.service';
import { AuthService } from './auth.service';
import * as jsonwebtoken from 'jsonwebtoken';
import { User } from 'src/graphql.schema';

@Controller('auth')
export class AuthController {
	constructor(
		private readonly authService: AuthService,
		private readonly usersService: UsersService
	) {}

	@Post('login')
	async login(@Body('email') email, @Body('password') password: string) {
		// tslint:disable:no-console
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
		console.log(user);

		return await this.authService.createToken(user);
	}

	@Post('refresh')
	async refresh(@Body('jwt') jwt) {
		console.log('Request to refresh jwt token, check if it is a valid token');

		return await this.authService.refreshToken(jwt);
	}
}
