import { Inject } from '@nestjs/common';
import { RepositoryClientService } from '../../../providers/repository-client.service';

export class SampleSampleRepositoryClientService {
    constructor(
        @Inject('sampleService')
        private readonly service: RepositoryClientService
    ) {}

    get client() {
        return this.service;
    }
}
