import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlOptions } from './graphql.options';
import { AuthModule } from './auth/auth.module';
import { AppKeyModule } from './app-key/app-key.module';
import { GitClientModule } from './git-client/git-client.module';
import { RepositoriesModule } from './repositories/repositories.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
    PrismaModule,
    forwardRef(() => UsersModule),
    forwardRef(() => AuthModule),
    AppKeyModule,
    GitClientModule,
    RepositoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
