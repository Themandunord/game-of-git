import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../graphql.schema';
import { UsersService } from '../users/users.service';

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
      hasAppKey: userData.keys != null && userData.keys.length > 0 ? true : false,
      name: userData.name ? userData.name : 'Disciple of Shrek',
      gitLogin: userData.gitLogin,
    };
    const accessToken = this.jwtService.sign(user);

    return {
      expiresIn: 3600,
      accessToken,
    };
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
