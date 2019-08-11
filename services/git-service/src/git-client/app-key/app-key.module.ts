import { Module, forwardRef } from '@nestjs/common';
import { AppKeyService } from './app-key.service';
import { AppKeyResolver } from './app-key.resolver';
import { UsersModule } from '../../users/users.module';
import { GitClientModule } from '../git-client.module';
import { PrismaModule } from '../../prisma/prisma.module';
import { AppKeyController } from './app-key.controller';

@Module({
	imports: [PrismaModule, forwardRef(() => UsersModule), forwardRef(() => GitClientModule)],
	providers: [AppKeyService, AppKeyResolver],
	exports: [AppKeyService, AppKeyResolver],
	controllers: [AppKeyController]
})
export class AppKeyModule {}
