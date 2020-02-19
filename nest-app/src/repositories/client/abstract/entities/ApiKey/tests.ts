import { RepositoryClient } from '../../RepositoryClient.abstract';
import initializeClientFromConfig from '../../../../../../testUtils/initializeClientFromConfig';

const ApiKeyTests = repositoryClientConfig => {
    let client: RepositoryClient;
    const { ApiKey } = repositoryClientConfig.entities;

    beforeAll(() => {
        client = initializeClientFromConfig(repositoryClientConfig);
    });

    describe('testApiKey', () => {
        describe('Invalid Scenarios', () => {
            ApiKey.invalidScenarios.map(scenario =>
                it(scenario.it, async () => {
                    await expect(
                        client.apiKey.testApiKey(scenario.val)
                    ).resolves.toBeFalsy();
                })
            );
        });
        describe('Valid Scenarios', () => {
            ApiKey.validScenarios.map(scenario =>
                it(scenario.it, async () => {
                    await expect(
                        client.apiKey.testApiKey(scenario.val)
                    ).resolves.toBeTruthy();
                })
            );
        });
    });
};

export default ApiKeyTests;
