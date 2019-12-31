import { UserResolver } from './user.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';
import ps from '../pubsub';
import { UserInternalResolver } from './user.internal.resolver';

@Module({
    imports: [PrismaModule],
    providers: [
        UserResolver,
        {
            provide: 'PUB_SUB',
            useValue: ps
        },
        UserInternalResolver
    ],
    exports: [UserInternalResolver]
})
export class UserInternalModule {}
