import { RepositoryClient } from '../../client/RepositoryClient.abstract';

import { Logger } from '@nestjs/common';

export class SampleRepositoryClient extends RepositoryClient {
    private readonly logger = new Logger('SampleRepositoryClient');
    constructor() {
        super();
    }
    async testAPIKey(apiKey: string) {
        if (apiKey === 'false') {
            return false;
        }
        return true;
    }
}
