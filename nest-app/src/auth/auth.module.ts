import { PasswordService } from './password.service';
import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { Module, Scope, forwardRef } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { authConstants } from '../common/auth/constants';
import { GraphqlModule } from '../graphql/graphql.module';
import { UserModule } from '../user/user.module';

@Module({
    imports: [
        GraphqlModule,
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: authConstants.jwtSecret,
            signOptions: { expiresIn: '180s' }
        }),
        forwardRef(() => UserModule)
    ],
    providers: [
        AuthService,
        AuthResolver,
        JwtStrategy,
        GqlAuthGuard,
        PasswordService
    ],
    exports: [AuthService, GqlAuthGuard]
})
export class AuthModule {}
