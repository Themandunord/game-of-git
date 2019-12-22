import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DateScalar } from '../common/scalars/date.scalar';
import { AuthModule } from '../auth/auth.module';
import { GameModule } from '../game/game.module';
import { PrismaModule } from '../prisma/prisma.module';
import { UserModule } from '../user/user.module';
import { GitClientModule } from '../git/client/git-client.module';
import { RepositoriesModule } from './../repositories/repositories.module';
import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import ps from '../pubsub';

@Module({
    imports: [
        // Core GraphQL/Prisma Setup
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
        // GraphQLModule.forRoot({
        //     autoSchemaFile: './src/schema.graphql',
        //     debug: true,
        //     playground: true,
        //     context: ({ req }) => ({ req }),
        //     installSubscriptionHandlers: true,
        //     subscriptions:{
        //         // path: '/subscriptions'
        //         onConnect: (connectionParams, ws, context) => {
        //             console.log('subscription onConnect', connectionParams, ws, context);
        //             // connectionParams.headers.Authorization
        //             // context.socket?
        //         }
        //     }

        // }),
        PrismaModule,

        // Auth Setup
        AuthModule,
        UserModule,

        // Game Setup
        GameModule,

        GitClientModule,
        RepositoriesModule
    ],
    controllers: [AppController],
    providers: [
        AppService,
        AppResolver,
        DateScalar,
        {
            provide: 'PUB_SUB',
            useValue: ps
        }
        // , AppGateway
    ]
})
export class AppModule {}
