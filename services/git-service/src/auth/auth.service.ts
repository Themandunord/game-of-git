import { PassportModule } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../graphql.schema';
import { UsersService } from '../users/users.service';

const bcrypt = require('bcrypt');

const saltRounds = 10;

@Injectable()
export class AuthService {
  //   constructor(private readonly usersService: UsersService) {}

  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async createToken(userData: User) {
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

  public async encryptPassword(password: string) {
    const hashedPassword = bcrypt.hash(password, saltRounds);

    return hashedPassword;
  }

  public async comparePassword(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
  }
}
