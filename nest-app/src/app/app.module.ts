import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthModule } from '../auth/auth.module';
import { GraphqlModule } from '../graphql/graphql.module';
import ps from '../pubsub';
import { ApiKeyModule } from '../repositories/entities/api-key/api-key.module';
import { UserModule } from '../user/user.module';
import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';

@Module({
    imports: [
        GraphQLModule.forRootAsync({
            useFactory: (...args: any[]) => {
                return {
                    autoSchemaFile: './src/schema.graphql',
                    debug: true,
                    playground: true,
                    context: ({ req }) => ({ req }),
                    installSubscriptionHandlers: true,
                    subscriptions: {
                        // path: '/subscriptions'
                        onConnect: (connectionParams, ws, context) => {
                            console.log('subscription onConnect');
                        }
                    }
                };
            }
        }),

        GraphqlModule,

        // Auth Setup
        UserModule,
        AuthModule,
        ApiKeyModule
        // UserInternalModule,

        // Game Setup
        // GameModule,

        // GitClientModule
        // RepositoriesModule,
        // AppEventModule
    ],
    controllers: [AppController],
    providers: [
        AppService,
        AppResolver,
        // DateScalar,
        {
            provide: 'PUB_SUB',
            useValue: ps
        }
    ]
})
export class AppModule {}
