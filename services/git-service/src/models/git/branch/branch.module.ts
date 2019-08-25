import { Module } from '@nestjs/common';
import { BranchService } from './branch.service';
import { BranchController } from './branch.controller';
import { BranchResolver } from './branch.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
	imports: [PrismaModule],
	providers: [BranchService, BranchResolver],
	controllers: [BranchController]
})
export class BranchModule {}
