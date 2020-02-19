import { Test, TestingModule } from '@nestjs/testing';
import { RepositoryResolver } from './repository.resolver';

describe('RepositoryResolver', () => {
    let resolver: RepositoryResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [RepositoryResolver]
        }).compile();

        resolver = module.get<RepositoryResolver>(RepositoryResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
