import { Logger } from '@nestjs/common';
import { ApiKey } from '../../../abstract/entities/ApiKey/abstract';
import { gitHubGql } from '../GitHubGql.client';

export class GitHubApiKey extends ApiKey {
    constructor() {
        super();
        this.logger = new Logger('GitHubApiKey');
    }

    public async testApiKey(key) {
        this.logger.log(`testApiKey: ${key}`);
        if (!key || key.length === 0) {
            return false;
        }
        try {
            this.logger.log(
                `About to query the gitHubGql using ${key} to get Rate Limit`
            );
            const result = await gitHubGql(key, {
                query: `
                query {
                    rateLimit {
                        cost
                        limit
                        nodeCount
                        remaining
                        resetAt
                    }
                }
            `
            });

            if (result.data.errors) {
                this.logger.error('Detected errors: ', result.data.errors);
                return false;
            }

            if (
                result.data == null ||
                result.data.data == null ||
                result.data.data.rateLimit == null
            ) {
                this.logger.error(
                    'Missing expected data to validate against in app key test.'
                );
                return false;
            }
            this.logger.log('Valid Key');
            return true;
        } catch (e) {
            this.logger.error(
                'Error testing the app key: ' + e + ' likely invalid.'
            );
        }

        return false;
    }
}
