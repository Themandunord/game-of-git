import { Module } from '@nestjs/common';
import { RepositoryService } from './repository.service';
import { RepositoryResolver } from './repository.resolver';

@Module({
    providers: [RepositoryService, RepositoryResolver]
})
export class RepositoryModule {}
