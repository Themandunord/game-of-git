import { PrismaModule } from '../../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { BranchService } from './branch.service';
import { BranchController } from './branch.controller';
import { BranchResolver } from './branch.resolver';

@Module({
    imports: [PrismaModule],
    providers: [BranchService, BranchResolver],
    controllers: [BranchController]
})
export class BranchModule {}
