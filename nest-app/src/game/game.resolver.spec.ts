import { PrismaModule } from './../prisma/prisma.module';
import { Test, TestingModule } from '@nestjs/testing';
import { GameResolver } from './game.resolver';
import { PrismaService } from '../prisma/prisma.service';

const mockPrismaService = jest.genMockFromModule<PrismaService>(
    '../prisma/prisma.service'
);

describe('GameResolver', () => {
    let resolver: GameResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [PrismaModule],
            providers: [GameResolver]
        })
            .overrideProvider(PrismaService)
            .useValue(mockPrismaService)
            .compile();

        resolver = module.get<GameResolver>(GameResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
