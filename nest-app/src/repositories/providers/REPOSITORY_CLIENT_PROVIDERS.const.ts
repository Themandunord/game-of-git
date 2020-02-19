import { GitHub } from '@game-of-git/common/dist/repository/providers/github';
import { Sample } from '@game-of-git/common/dist/repository/providers/sample';
import { GithubRepositoryClient } from '../client/providers/git-hub/GithubRepositoryClient';
import { SampleRepositoryClient } from '../client/providers/sample/SampleRepositoryClient';

const GITHUB_REPOSITORY_PROVIDER = {
    client: GithubRepositoryClient,
    key: GitHub
};
const SAMPLE_REPOSITORY_PROVIDER = {
    client: SampleRepositoryClient,
    key: Sample
};

const REPOSITORY_CLIENT_PROVIDERS = [
    GITHUB_REPOSITORY_PROVIDER,
    SAMPLE_REPOSITORY_PROVIDER
];
export default REPOSITORY_CLIENT_PROVIDERS;
