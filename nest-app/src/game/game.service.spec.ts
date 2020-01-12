import { Test, TestingModule } from '@nestjs/testing';
import { GameService } from './game.service';
import { PrismaModule } from '../prisma/prisma.module';
import { RepositoriesModule } from '../repositories/repositories.module';

describe('GameService', () => {
    let service: GameService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [PrismaModule, RepositoriesModule],
            providers: [GameService]
        }).compile();

        service = module.get<GameService>(GameService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    // NOT IMPLEMENTED YET, TODO!
});
