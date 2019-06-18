import { PassportModule } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../dist/users/users.service';
import { User } from '../graphql.schema';

const bcrypt = require('bcrypt');

const saltRounds = 10;

@Injectable()
export class AuthService {
  //   constructor(private readonly usersService: UsersService) {}

  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async createToken(email: string) {
    const user: { email: string } = { email };
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

  //   public async encryptPassword(password: string) {
  //     const hashedPassword = bcrypt.hash(password, saltRounds);
  //     return hashedPassword;
  //   }

  public async comparePassword(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
  }
}
