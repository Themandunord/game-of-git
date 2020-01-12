import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameResolver } from './game.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { RepositoriesModule } from '../repositories/repositories.module';

@Module({
    imports: [PrismaModule, RepositoriesModule],
    providers: [GameService, GameResolver]
})
export class GameModule {}
