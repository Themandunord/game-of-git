import { Test, TestingModule } from '@nestjs/testing';
import { RepositoriesResolver } from './repositories.resolver';

describe('RepositoriesResolver', () => {
    let resolver: RepositoriesResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [RepositoriesResolver]
        }).compile();

        resolver = module.get<RepositoriesResolver>(RepositoriesResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
