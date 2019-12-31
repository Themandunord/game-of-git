import { forwardRef, Module } from '@nestjs/common';
import { PrismaModule } from '../../../prisma/prisma.module';
import { UserInternalModule } from '../../../user/user.internal.module';
import { GitClientModule } from '../git-client.module';
import { AppKeyInternalResolver } from './app-key.internal.resolver';
import { AppKeyResolver } from './app-key.resolver';
import { AppKeyService } from './app-key.service';

@Module({
    imports: [
        PrismaModule,
        forwardRef(() => GitClientModule),
        UserInternalModule
    ],
    providers: [AppKeyService, AppKeyResolver, AppKeyInternalResolver],
    exports: [AppKeyResolver, AppKeyService]
})
export class AppKeyModule {}
