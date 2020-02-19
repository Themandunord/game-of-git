import { Module } from '@nestjs/common';
import { FileDiffService } from './file-diff.service';
import { FileDiffController } from './file-diff.controller';
import { FileDiffResolver } from './file-diff.resolver';

@Module({
    providers: [FileDiffService, FileDiffResolver],
    controllers: [FileDiffController]
})
export class FileDiffModule {}
