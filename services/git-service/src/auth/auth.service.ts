import { Injectable, HttpStatus, HttpException, Inject, forwardRef } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../graphql.schema';
import { UsersService } from '../users/users.service';
import * as jsonwebtoken from 'jsonwebtoken';

// tslint:disable:no-console

// tslint:disable-next-line:no-var-requires
const bcrypt = require('bcrypt');

const saltRounds = 10;

@Injectable()
export class AuthService {
	constructor(
		private readonly jwtService: JwtService,
		@Inject(forwardRef(() => UsersService))
		private readonly usersService: UsersService
	) {}

	/**
	 * Create a jwt token with the given User data
	 * @param userData
	 */
	async createToken(userData: Partial<User>) {
		const user: {
			email: string;
			id: string;
			hasAppKey: boolean;
			name: string;
			gitLogin: string;
		} = {
			email: userData.email,
			id: userData.id,
			hasAppKey:
				(userData.keys != null && userData.keys.length > 0) || (userData as any).hasAppKey
					? true
					: false,
			name: userData.name ? userData.name : 'Disciple of Shrek',
			gitLogin: userData.gitLogin
		};
		const accessToken = this.jwtService.sign(user);

		return {
			expiresIn: 3600,
			accessToken
		};
	}

	async verifyToken(token: string) {
		try {
			const result = await this.jwtService.verifyAsync(token);

			return true;
		} catch (e) {
			return false;
		}

		return false;
	}

	async refreshToken(jwt: string) {
		const isValid = await this.verifyToken(jwt);

		const userData = jsonwebtoken.decode(jwt);
		const email = (userData as Partial<User>).email;
		const user = await this.usersService.get(email);

		let error = null;

		if (!user) {
			console.error(`user did not exist ${email} or jwt was invalid: ${isValid}`);
			error = `User did not exist`;
		}

		if (!isValid) {
			console.error(`Auth service could not verify the token ${jwt}`);
			error = `invalid jwt`;
		}

		if (error) {
			throw new HttpException(`Invalid jwt`, HttpStatus.UNAUTHORIZED);
		}

		return await this.createToken(user);
	}

	/**
	 * Validate that the given user exists to authenticate
	 * @param email
	 */
	async validateUser(email: string): Promise<User> {
		return await this.usersService.get(email);
	}

	/**
	 * Encrypt the given password
	 * @param password
	 */
	public async encryptPassword(password: string) {
		return bcrypt.hash(password, saltRounds);
	}

	/**
	 * Compare a password against its hash
	 */
	public async comparePassword(password: string, hashedPassword: string) {
		return await bcrypt.compare(password, hashedPassword);
	}
}
