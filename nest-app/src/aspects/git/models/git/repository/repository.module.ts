import { Module } from '@nestjs/common';
import { RepositoryService } from './repository.service';
import { RepositoryController } from './repository.controller';
import { RepositoryResolver } from './repository.resolver';
import { PrismaModule } from '../../../../prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    providers: [RepositoryService, RepositoryResolver],
    controllers: [RepositoryController]
})
export class RepositoryModule {}
