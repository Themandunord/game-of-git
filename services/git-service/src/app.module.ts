import { forwardRef, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppKeyModule } from './app-key/app-key.module';
import { AuthModule } from './auth/auth.module';
import { GitClientModule } from './git-client/git-client.module';
import { GraphqlOptions } from './graphql.options';
import { PrismaModule } from './prisma/prisma.module';
import { RepositoriesModule } from './repositories/repositories.module';
import { UsersModule } from './users/users.module';

@Module({
	imports: [
		AppKeyModule,
		forwardRef(() => AuthModule),
		GitClientModule,
		GraphQLModule.forRootAsync({
			useClass: GraphqlOptions,
		}),
		MongooseModule.forRoot('mongodb://localhost/nest'),
		PrismaModule,
		RepositoriesModule,
		forwardRef(() => UsersModule),
	]
})
export class AppModule {}
