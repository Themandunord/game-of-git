import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { GraphqlModule } from '../graphql/graphql.module';
import ps from '../pubsub';
import { ApiKeyModule } from '../repositories/entities/api-key/api-key.module';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
    imports: [
        GraphqlModule,
        forwardRef(() => ApiKeyModule),
        forwardRef(() => AuthModule)
    ],
    providers: [
        UserResolver,
        {
            provide: 'PUB_SUB',
            useValue: ps
        },
        UserService
    ],
    exports: [UserResolver, UserService]
})
export class UserModule {}
