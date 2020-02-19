import { Inject } from '@nestjs/common';
import { RepositoryClientService } from '../../../providers/repository-client.service';

export class SampleGithubRepositoryClientService {
    constructor(
        @Inject('githubService')
        private readonly service: RepositoryClientService
    ) {}

    get client() {
        return this.service;
    }
}
