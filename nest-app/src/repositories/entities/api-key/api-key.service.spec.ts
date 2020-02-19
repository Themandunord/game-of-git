import { Test, TestingModule } from '@nestjs/testing';
import { ApiKeyService } from './api-key.service';
import { GraphqlService } from '../../../graphql/graphql.service';
import { GraphqlModule } from '../../../graphql/graphql.module';
import { purgeUsers, seedUser } from '../../../../testUtils/user';
import {
    seedApiKey,
    createApiKeyMutationVariableFactory,
    purgeApiKeys
} from '../../../../testUtils/api-key';
import { RepositoryProviders, CreateApiKeyInput } from '@game-of-git/common';
import { RepositoryProvidersModule } from '../../providers/repository-providers.module';

const SAMPLE_REPOSITORY = {
    provider: RepositoryProviders.Sample,
    invalidScenarios: [
        {
            it: `is falsy when the API key is invalid`,
            key: 'false',
            expect: false
        }
    ],
    validScenarios: [
        {
            it: `is truthy when the API key is valid`,
            key: 'true',
            expect: true
        }
    ]
};

const GITHUB_REPOSITORY = {
    provider: RepositoryProviders.GitHub,
    invalidScenarios: [
        {
            it: `is falsy when the API key is invalid`,
            key: 'some-really-invalid-key',
            expect: false
        }
    ],
    validScenarios: [
        {
            it: `is truthy when the API key is valid`,
            key: process.env.GIT_TESTING_TOKEN,
            expect: true
        }
    ]
};

const REPOSITORY_SCENARIOS = [SAMPLE_REPOSITORY, GITHUB_REPOSITORY];

describe('ApiKeyService', () => {
    let service: ApiKeyService;
    let gqlService: GraphqlService;

    const createdUserPurgeArray = [];
    const createdApiKeyPurgeArray = [];

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ApiKeyService],
            imports: [GraphqlModule, RepositoryProvidersModule.forRoot()]
        }).compile();

        service = module.get<ApiKeyService>(ApiKeyService);
        gqlService = module.get<GraphqlService>(GraphqlService);
    });

    afterAll(async () => {
        await purgeApiKeys(gqlService, createdApiKeyPurgeArray); // cascading deletes mean this isn't _really_ necessary :)
        await purgeUsers(gqlService, createdUserPurgeArray);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('Creating an Api Key', () => {
        it('Returns the existing Api Key if the key already exists for the user', async () => {
            const user = await seedUser(gqlService, createdUserPurgeArray);
            const existingApiKey = await seedApiKey(
                gqlService,
                user,
                createdApiKeyPurgeArray
            );

            await expect(
                service.createApiKey(
                    user,
                    createApiKeyMutationVariableFactory({
                        key: existingApiKey.key
                    })
                )
            ).resolves.toEqual({
                ...existingApiKey,
                key: undefined
            });
        });

        it('Creates and returns an Api Key without the `key` property when valid data is passed', async () => {
            const user = await seedUser(gqlService, createdUserPurgeArray);
            const apiKeyData: CreateApiKeyInput = {
                key: 'someApiKeyThatsValid',
                name: 'testingApiKeyService',
                provider: RepositoryProviders.Sample
            };
            const response = await service.createApiKey(
                user,
                createApiKeyMutationVariableFactory(apiKeyData)
            );

            // verify the reponse shape
            expect(response).toMatchObject({
                ...apiKeyData
            });
            expect(response).toHaveProperty('id');
            createdApiKeyPurgeArray.push(response);
        });
    });

    describe('getApiKeyByUserId', () => {
        it("Returns all a user's existing API Keys", async () => {
            const user = await seedUser(gqlService, createdUserPurgeArray);
            const existingApiKey = await seedApiKey(
                gqlService,
                user,
                createdApiKeyPurgeArray,
                {
                    key: 'someApiKeyThatsValid1',
                    name: 'testingApiKeyService1',
                    provider: RepositoryProviders.Sample
                }
            );
            const existingApiKey2 = await seedApiKey(
                gqlService,
                user,
                createdApiKeyPurgeArray,
                {
                    key: 'someApiKeyThatsValid2',
                    name: 'testingApiKeyService2',
                    provider: RepositoryProviders.GitHub
                }
            );
            const response = await service.getApiKeysByUserId(user.id);
            expect(response).toHaveLength(2);
        });
    });

    describe('validateApiKey', () => {
        describe('Correctly resolves the repository provider client and validates the key', () => {
            REPOSITORY_SCENARIOS.map(repositoryType => {
                describe(`Provider: ${repositoryType.provider}`, () => {
                    describe('Invalid Scenarios: ', () => {
                        repositoryType.invalidScenarios.map(invalidScenario => {
                            it(invalidScenario.it, async () => {
                                await expect(
                                    service.validateApiKey(
                                        invalidScenario.key,
                                        repositoryType.provider
                                    )
                                ).resolves.toBeFalsy();
                            });
                        });
                    });
                    describe('Valid Scenarios', () => {
                        repositoryType.validScenarios.map(validScenario => {
                            it(validScenario.it, async () => {
                                await expect(
                                    service.validateApiKey(
                                        validScenario.key,
                                        repositoryType.provider
                                    )
                                ).resolves.toBeTruthy();
                            });
                        });
                    });
                });
            });
        });
    });
});
