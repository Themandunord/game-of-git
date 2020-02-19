import { Test, TestingModule } from '@nestjs/testing';
import { GameResolver } from './game.resolver';

import { GameService } from './game.service';

// const mockPrismaService = jest.genMockFromModule<PrismaService>(
//     '../prisma/prisma.service'
// );

describe('GameResolver', () => {
    let resolver: GameResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            providers: [GameResolver, GameService]
        }).compile();

        resolver = module.get<GameResolver>(GameResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });

    // NOT IMPLEMENTED YET!, TODO
});
