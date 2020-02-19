import { Logger } from '@nestjs/common';
import { RepositoryClient } from '../../abstract/RepositoryClient.abstract';
import { GitHubApiKey } from './entities/GitHubApiKey';

export class GithubRepositoryClient extends RepositoryClient {
    constructor() {
        const githubApiKey: GitHubApiKey = new GitHubApiKey();
        super(githubApiKey);
        this.logger = new Logger('GithubRepositoryClient');
    }
}
