import { forwardRef, Module } from '@nestjs/common';
import { AppKeyModule } from '../app-key/app-key.module';
import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersController } from './users.controller';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
	imports: [PrismaModule, forwardRef(() => AuthModule), forwardRef(() => AppKeyModule)],
	providers: [UsersResolver, UsersService],
	exports: [UsersResolver, UsersService],
	controllers: [UsersController],
})
export class UsersModule {}
