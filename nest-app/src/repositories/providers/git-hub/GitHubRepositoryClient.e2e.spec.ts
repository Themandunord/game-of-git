import { GithubRepositoryClient } from './GithubRepositoryClient';

const validKey = process.env.GIT_TESTING_TOKEN;

describe('GitHubRepositoryClient E2E', () => {
    let gitHubRepositoryClient: GithubRepositoryClient;

    beforeEach(async () => {
        gitHubRepositoryClient = new GithubRepositoryClient();
    });

    it('should be defined', () => {
        expect(gitHubRepositoryClient).toBeDefined();
    });

    describe('testAPIKey', () => {
        it('Returns true if the API Key is valid', async () => {
            await expect(
                gitHubRepositoryClient.testAPIKey(validKey)
            ).resolves.toBeTruthy();
        });
    });
});
