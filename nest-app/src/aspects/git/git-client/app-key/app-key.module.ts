import { PrismaModule } from './../../../prisma/prisma.module';
import { Module, forwardRef } from '@nestjs/common';
import { AppKeyService } from './app-key.service';
import { AppKeyResolver } from './app-key.resolver';
import { GitClientModule } from '../git-client.module';
// import { AppKeyController } from './app-key.controller';
import { UserModule } from '../../models/git/user/user.module';

@Module({
    imports: [
        PrismaModule,
        forwardRef(() => UserModule),
        forwardRef(() => GitClientModule)
    ],
    providers: [AppKeyService, AppKeyResolver],
    exports: [AppKeyResolver, AppKeyService]
    // controllers: [AppKeyController]
})
export class AppKeyModule {}
