import { Module, forwardRef } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthModule } from '../auth/auth.module';
import { AppKeyService } from '../app-key/app-key.service';
import { AppKeyModule } from '../app-key/app-key.module';

@Module({
  imports: [PrismaModule, forwardRef(() => AuthModule), forwardRef(() => AppKeyModule)],
  providers: [UsersResolver, UsersService],
  exports: [UsersResolver, UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
