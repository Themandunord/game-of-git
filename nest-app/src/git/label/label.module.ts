import { Module } from '@nestjs/common';
import { LabelService } from './label.service';
import { LabelController } from './label.controller';
import { LabelResolver } from './label.resolver';

@Module({
    providers: [LabelService, LabelResolver],
    controllers: [LabelController]
})
export class LabelModule {}
