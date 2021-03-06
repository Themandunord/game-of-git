import { Inject } from '@nestjs/common';
import { RepositoryClientService } from '../repository-client.service';

export class SampleGithubRepositoryClientService {
    constructor(
        @Inject('githubService')
        private readonly service: RepositoryClientService
    ) {}

    get client() {
        return this.service;
    }
}
