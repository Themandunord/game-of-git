import initializeClientFromConfig from '../../../../testUtils/initializeClientFromConfig';
import GitHubRepositoryTestConfig from '../providers/git-hub/tests';
import SampleRepositoryTestConfig from '../providers/sample/tests';
import { ApiKey } from './entities/ApiKey/abstract';
import { RepositoryClient } from './RepositoryClient.abstract';
import entityTests from './entities/test';

const REPOSITORY_CLIENTS = [
    GitHubRepositoryTestConfig,
    SampleRepositoryTestConfig
];

describe('Repository Client', () => {
    it('stubs', () => {
        expect(true).toBeTruthy();
    });

    REPOSITORY_CLIENTS.map(repositoryClientConfig => {
        describe(`${repositoryClientConfig.name}`, () => {
            let client: RepositoryClient;

            beforeAll(() => {
                client = initializeClientFromConfig(repositoryClientConfig);
            });

            describe('Repository Object Configuration', () => {
                it('Is an implementation of the Repository Client', () => {
                    expect(client).toBeInstanceOf(RepositoryClient);
                });
                it('.apiKey an implementation of the Api Key', () => {
                    expect(client.apiKey).toBeInstanceOf(ApiKey);
                });
            });

            entityTests(repositoryClientConfig);
        });
    });
});
