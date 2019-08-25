import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DateScalar } from '../../common/scalars/date.scalar';
import { AuthModule } from '../auth/auth.module';
import { GameModule } from '../game/game.module';
import { PostModule } from '../post/post.module';
import { PrismaModule } from '../prisma/prisma.module';
import { UserModule } from '../user/user.module';
import { GitClientModule } from './../git/git-client/git-client.module';
import { RepositoriesModule } from './../repositories/repositories.module';
import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';

@Module({
    imports: [
        // Core GraphQL/Prisma Setup
        GraphQLModule.forRoot({
            autoSchemaFile: './src/schema.graphql',
            debug: true,
            playground: true,
            context: ({ req }) => ({ req })
        }),
        PrismaModule,

        // Auth Setup
        AuthModule,
        UserModule,

        // Sample Module
        PostModule,

        // Game Setup
        GameModule,

        GitClientModule,
        RepositoriesModule
    ],
    controllers: [AppController],
    providers: [AppService, AppResolver, DateScalar]
})
export class AppModule {}
