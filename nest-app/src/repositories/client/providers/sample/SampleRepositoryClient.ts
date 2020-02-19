import { RepositoryClient } from '../../abstract/RepositoryClient.abstract';

import { Logger } from '@nestjs/common';
import { SampleApiKey } from './entities/SampleApiKey';

export class SampleRepositoryClient extends RepositoryClient {
    constructor() {
        const sampleApiKey: SampleApiKey = new SampleApiKey();
        super(sampleApiKey);
        this.logger = new Logger('SampleRepositoryClient');
    }
}
