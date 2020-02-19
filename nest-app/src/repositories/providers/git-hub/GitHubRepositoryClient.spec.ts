import { GithubRepositoryClient } from './GithubRepositoryClient';

// gitHubGql
const INVALID_SCENARIOS = [
    {
        it: 'Returns false when no app key is provided',
        val: undefined as string
    },
    {
        it: 'Returns false when the app key is invalid',
        val: 'Shrek157435CATMAN'
    }
];

describe('GitHubRepositoryClient', () => {
    let gitHubRepositoryClient: GithubRepositoryClient;

    beforeEach(async () => {
        gitHubRepositoryClient = new GithubRepositoryClient();
    });

    it('should be defined', () => {
        expect(gitHubRepositoryClient).toBeDefined();
    });

    describe('testAPIKey', () => {
        describe('Invalid Scenarios', () => {
            INVALID_SCENARIOS.map(scenario =>
                it(scenario.it, async () => {
                    expect(
                        gitHubRepositoryClient.testAPIKey(scenario.val)
                    ).resolves.toBeFalsy();
                })
            );
        });
    });
});
