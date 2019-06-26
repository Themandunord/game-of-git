import { Module, forwardRef } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [PrismaModule, forwardRef(() => AuthModule)],
  providers: [UsersResolver, UsersService],
  exports: [UsersResolver, UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
