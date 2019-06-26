import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpStrategy } from './http.strategy';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'secretKey',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    forwardRef(() => UsersModule),
  ],
  //   providers: [AuthService, HttpStrategy],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  //   exports: [PassportModule, AuthService],
  exports: [AuthService],
})
export class AuthModule {}
