import { Test, TestingModule } from '@nestjs/testing';
import { GithubRepositoryClient } from './git-hub/GithubRepositoryClient';
import { SampleGithubRepositoryClientService } from './git-hub/GithubRepositoryClient.sample';
import { RepositoryClientService } from './repository-client.service';
import { RepositoryProvidersModule } from './repository-providers.module';
import { SampleRepositoryClient } from './sample/SampleRepositoryClient';
import { SampleSampleRepositoryClientService } from './sample/SampleRepositoryClient.sample';

const REPOSITORY_CLIENT_PROVIDER_SERVICES = [
    [
        'githubService',
        'GithubRepositoryClient',
        GithubRepositoryClient,
        SampleGithubRepositoryClientService
    ],
    [
        'sampleService',
        'SampleRepositoryClient',
        SampleRepositoryClient,
        SampleSampleRepositoryClientService
    ]
] as const;

describe('RepositoryClientService', () => {
    let service: RepositoryClientService;
    let module: TestingModule;

    beforeEach(async () => {
        module = await Test.createTestingModule({
            imports: [RepositoryProvidersModule.forRoot()],
            providers: [
                ...REPOSITORY_CLIENT_PROVIDER_SERVICES.map(
                    ([service, clientName, client, sample]) => sample
                )
            ]
        }).compile();
        service = await module.resolve<RepositoryClientService>(
            RepositoryClientService
        );
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('It exposes RepositoryClient instances', () => {
        REPOSITORY_CLIENT_PROVIDER_SERVICES.map(
            ([key, clientName, client, testClass], index) => {
                it(`Can resolve ${clientName} as the 'client' when from an Inject with '${key}'`, async () => {
                    const testingRepositoryService = await module.get(
                        testClass as any
                    );
                    expect(
                        testingRepositoryService.service.client
                    ).toBeInstanceOf(client);
                    expect(
                        testingRepositoryService.service.client.constructor.name
                    ).toEqual(clientName);
                });
            }
        );
    });
});
