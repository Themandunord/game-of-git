import { UserResolver } from './user.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';
import ps from '../../pubsub';

@Module({
    imports: [PrismaModule],
    providers: [
        UserResolver,
        {
            provide: 'PUB_SUB',
            useValue: ps
        }
    ]
})
export class UserModule {}
