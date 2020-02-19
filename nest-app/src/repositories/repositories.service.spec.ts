import { Test, TestingModule } from '@nestjs/testing';
import { RepositoriesService } from './repositories.service';
import { GraphqlModule } from '../graphql/graphql.module';
import { ApiKeyModule } from './entities/api-key/api-key.module';
import { ApiKeyService } from './entities/api-key/api-key.service';

describe('RepositoriesService', () => {
    let service: RepositoriesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [GraphqlModule, ApiKeyModule],
            providers: [RepositoriesService]
        }).compile();

        service = module.get<RepositoriesService>(RepositoriesService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
