import { Test, TestingModule } from '@nestjs/testing';
import { GraphqlModule } from '../graphql/graphql.module';
import { GraphqlService } from '../graphql/graphql.service';
import { GameService } from './game.service';

describe('GameService', () => {
    let service: GameService;
    let gqlService: GraphqlService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [GraphqlModule],
            providers: [GameService]
        }).compile();

        service = module.get<GameService>(GameService);
        gqlService = module.get<GraphqlService>(GraphqlService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('createGame', () => {
        it('stubs', () => {
            expect(true).toBeTruthy();
        });
    });

    describe('endGame', () => {
        it('stubs', () => {
            expect(true).toBeTruthy();
        });
    });
});
