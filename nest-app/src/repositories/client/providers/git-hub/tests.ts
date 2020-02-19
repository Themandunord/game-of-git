import { RepositoryProviders } from '@game-of-git/common';
import { RepositoryTestConfig } from '../../../../../testUtils/repositoryTestConfig';
import { GithubRepositoryClient } from './GithubRepositoryClient';

const GitHubRepositoryTestConfig: RepositoryTestConfig = {
    name: RepositoryProviders.GitHub,
    client: GithubRepositoryClient,
    entities: {
        ApiKey: {
            invalidScenarios: [
                {
                    it: 'Returns false when no app key is provided',
                    val: undefined as string
                },
                {
                    it: 'Returns false when the app key is invalid',
                    val: 'Shrek157435CATMAN'
                }
            ],
            validScenarios: [
                {
                    it: 'Returns true when the app key is valid',
                    val: process.env.GIT_TESTING_TOKEN
                }
            ]
        }
    }
};

export default GitHubRepositoryTestConfig;
