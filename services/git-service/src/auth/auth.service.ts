import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
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
    private readonly usersService: UsersService,
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
      hasAppKey: (userData.keys != null && userData.keys.length > 0 || (userData as any).hasAppKey) ? true : false,
      name: userData.name ? userData.name : 'Disciple of Shrek',
      gitLogin: userData.gitLogin,
    };
    const accessToken = this.jwtService.sign(user);

    return {
      expiresIn: 3600,
      accessToken,
    };
  }

  async verifyToken(token: string) {
    console.log('verifying token', token);

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

    console.log('Returning new jwt token');

    return await this.createToken(user);
  }

  /**
   * Validate that the given user exists to authenticate
   * @param email
   */
  async validateUser(email: string): Promise<User> {
    return await this.usersService.get(email);
  }
  //   public async sign(payload, options = {}) {
  //     return await this.jwtService.sign(payload, options);
  //   }

  /**
   * Encrypt the given password
   * @param password
   */
  public async encryptPassword(password: string) {
    console.log('encrypting password: ' + password);
    const hashedPassword = bcrypt.hash(password, saltRounds);

    return hashedPassword;
  }

  /**
   * Compare a password against its hash
   */
  public async comparePassword(password: string, hashedPassword: string) {
    console.log('comparing password: ' + password + ' against ' + hashedPassword);
    const result = await bcrypt.compare(password, hashedPassword);
    console.log('comparison result = ' + result);

    return result;
  }
}
