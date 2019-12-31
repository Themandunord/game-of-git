import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthModule } from '../auth/auth.module';
import { DateScalar } from '../common/scalars/date.scalar';
import { GameModule } from '../game/game.module';
import { GitClientModule } from '../git/client/git-client.module';
import { PrismaModule } from '../prisma/prisma.module';
import ps from '../pubsub';
import { UserInternalModule } from '../user/user.internal.module';
import { RepositoriesModule } from './../repositories/repositories.module';
import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { AppEventModule } from '../app-event/app-event.module';

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

        PrismaModule,

        // Auth Setup
        AuthModule,
        UserInternalModule,

        // Game Setup
        GameModule,

        GitClientModule,
        RepositoriesModule,
        AppEventModule
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
    ]
})
export class AppModule {}
