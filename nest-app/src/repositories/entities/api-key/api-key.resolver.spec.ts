import { Test, TestingModule } from '@nestjs/testing';
import { ApiKeyResolver } from './api-key.resolver';
import { ApiKeyService } from './api-key.service';
import { RepositoryProvider, User } from '@game-of-git/common';
import { AuthModule } from '../../../auth/auth.module';
const apiKeyServiceMock = jest.genMockFromModule<ApiKeyService>(
    './api-key.service'
);

const fakeApiKey = {
    created_at: new Date().toISOString(),
    id: 'someUUID',
    name: 'Some name',
    provider: RepositoryProvider.Sample,
    user_id: 'abc123'
};
const fakeCreateApiKey = {
    name: 'Some name',
    provider: RepositoryProvider.Sample,
    key: 'some key'
};

describe('ApiKeyResolver', () => {
    let resolver: ApiKeyResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [AuthModule],
            providers: [ApiKeyResolver, ApiKeyService]
        })
            .overrideProvider(ApiKeyService)
            .useValue(apiKeyServiceMock)
            .compile();

        resolver = module.get<ApiKeyResolver>(ApiKeyResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });

    describe('createApiKey', () => {
        it('creates an api key and returns the newly created record', async () => {
            apiKeyServiceMock.createApiKey = jest.fn(async () => fakeApiKey);
            await expect(
                resolver.createApiKey({} as User, fakeCreateApiKey)
            ).resolves.toEqual(fakeApiKey);
        });
    });
});
