import { RepositoryProviders } from '@game-of-git/common';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import {
    createApiKeyMutationFactory,
    purgeApiKeys
} from '../../../../testUtils/api-key';
import { purgeUsers, seedUser } from '../../../../testUtils/user';
import { AppModule } from '../../../app/app.module';
import { AuthService } from '../../../auth/auth.service';
import { GraphqlService } from '../../../graphql/graphql.service';

const API_KEY_BASE = {
    name: 'SomeApiKey',
    key: 'somekey',
    provider: RepositoryProviders.Sample
};

const INVALID_VALIDATION_SCENARIOS = [
    {
        it: 'key is missing',
        mutation: createApiKeyMutationFactory({
            ...API_KEY_BASE,
            key: undefined
        }),
        errorTextContains: `Field CreateApiKeyInput.key of required type String! was not provided.`
    },
    {
        it: 'name is missing',
        mutation: createApiKeyMutationFactory({
            ...API_KEY_BASE,
            name: undefined
        }),
        errorTextContains: `Field CreateApiKeyInput.name of required type String! was not provided.`
    },
    {
        it: 'provider is missing',
        mutation: createApiKeyMutationFactory({
            ...API_KEY_BASE,
            provider: undefined
        }),
        errorTextContains: `Field CreateApiKeyInput.provider of required type String! was not provided.`
    }
];

describe('ApiKeyResolver (E2E)', () => {
    let app: INestApplication;
    let gqlService: GraphqlService;
    let authService: AuthService;
    const usersCreatedToPurge = [];
    const apiKeysToPurge = [];

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule]
        }).compile();
        gqlService = await moduleFixture.resolve<GraphqlService>(
            GraphqlService
        );
        authService = await moduleFixture.resolve<AuthService>(AuthService);
        app = moduleFixture.createNestApplication();
        await app.init();
    });

    afterAll(async () => {
        await purgeApiKeys(gqlService, apiKeysToPurge);
        await purgeUsers(gqlService, usersCreatedToPurge);
    });

    it('should be defined', () => {
        expect(app).toBeDefined();
    });

    describe('Create API Key', () => {
        describe('Invalid Scenarions', () => {
            const apiKeyData = {
                name: 'testKey',
                key: 'somekey',
                provider: RepositoryProviders.Sample
            };
            it(`Throws 403 when not authenticated`, async () => {
                const req = request(app.getHttpServer())
                    .post('/graphql')
                    .set('Authorization', 'Bearer scooby doo')
                    .send({
                        query: createApiKeyMutationFactory(apiKeyData)
                    });

                const res = await req;
                expect(res.status).toEqual(200);
                expect(res.body.errors[0].message.statusCode).toEqual(403);
            });
            describe('Validation Scenarios', () => {
                let user;
                beforeAll(async () => {
                    user = await seedUser(gqlService, usersCreatedToPurge);
                });

                INVALID_VALIDATION_SCENARIOS.map(scenario => {
                    it(`Throws 400 when ${scenario.it}`, async () => {
                        const token = await authService.login(
                            user.email,
                            user.password
                        );

                        const req = request(app.getHttpServer())
                            .post('/graphql')
                            .set('Authorization', 'Bearer ' + token)
                            .send({
                                query: scenario.mutation
                            });

                        const res = await req;
                        expect(res.status).toEqual(400);
                        expect(
                            res.error.text.indexOf(
                                scenario.errorTextContains
                            ) >= 0
                        ).toBeTruthy();
                    });
                });
            });
        });
        describe('Successfully registers an API key and returns it', () => {
            const REPOSITORY_PROVIDER_API_KEYS = [
                {
                    provider: RepositoryProviders.Sample,
                    apiKeyData: {
                        key: 'true'
                    }
                },
                {
                    provider: RepositoryProviders.GitHub,
                    apiKeyData: {
                        key: process.env.GIT_TESTING_TOKEN
                    }
                }
            ];
            REPOSITORY_PROVIDER_API_KEYS.map(
                validRepositoryProviderApiKeyConfig => {
                    it(`${validRepositoryProviderApiKeyConfig.provider} Repository`, async () => {
                        const {
                            provider,
                            apiKeyData: { key }
                        } = validRepositoryProviderApiKeyConfig;
                        const user = await seedUser(
                            gqlService,
                            usersCreatedToPurge
                        );
                        const token = await authService.login(
                            user.email,
                            user.password
                        );
                        const apiKeyData = {
                            name: 'testKey',
                            provider,
                            key
                        };
                        const apiKeyMutation = createApiKeyMutationFactory(
                            apiKeyData
                        );
                        const req = request(app.getHttpServer())
                            .post('/graphql')
                            .set('Authorization', 'Bearer ' + token)
                            .send({
                                query: apiKeyMutation
                            });

                        const res = await req;

                        expect(res.status).toEqual(200);
                        expect(res.body).toHaveProperty('data');
                        expect(res.body.data).toHaveProperty('createApiKey');

                        apiKeysToPurge.push(res.body.data.createApiKey);
                    });
                }
            );
        });
    });
});
