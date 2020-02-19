import { Logger } from '@nestjs/common';
import { RepositoryClient } from '../../client/RepositoryClient.abstract';
import { gitHubGql } from './GitHubGql.client';
import GET_RATE_LIMIT from './gql/GET_RATE_LIMIT.gql';

export class GithubRepositoryClient extends RepositoryClient {
    private readonly logger = new Logger('GithubRepositoryClient');
    constructor() {
        super();
    }
    async testAPIKey(apiKey: string) {
        if (!apiKey || apiKey.length === 0) {
            return false;
        }
        try {
            this.logger.log(
                `About to query the gitHubGql using ${apiKey} to get Rate Limit`
            );
            const result = await gitHubGql(apiKey, {
                query: `query {
                    rateLimit {
                        cost
                        limit
                        nodeCount
                        remaining
                        resetAt
                    }
                }`
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
