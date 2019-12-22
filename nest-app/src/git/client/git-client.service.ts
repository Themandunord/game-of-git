import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { gitHubGql } from '../utilities/gitHubGql';
import { AppKeyService } from './app-key/app-key.service';
import GET_REPOSITORIES from './gql/GET_REPOSITORIES.gql';
import GET_REPOSITORY_DETAILS from './gql/GET_REPOSITORY_DETAILS.gql';
import GET_USER_DATA from './gql/GET_USER_DATA.gql';
import { WebhooksService } from './webhooks/webhooks.service';
import GET_COMMITS from './gql/GET_COMMITS.gql';

@Injectable()
export class GitClientService {
    private readonly logger = new Logger('GitClientService');

    constructor(
        @Inject(forwardRef(() => AppKeyService))
        private readonly appKeyService: AppKeyService,
        @Inject(forwardRef(() => WebhooksService))
        private readonly webhooksService: WebhooksService
    ) {}

    /**
     * GitHub Webhooks-Specific Module
     */
    get webhooks() {
        return this.webhooksService;
    }

    /**
     * GitHub AppKey-Specific Module
     */
    get appKey() {
        return this.appKeyService;
    }

    /**
     * Load Repositories from GitHub and attach the AppKey id used to retrieve them to each record.
     *
     * @param user
     * @param owner
     */
    async getAll(email: string, owner: string, count = 100) {
        const appKeys = await this.appKeyService.getAllByUserIdOrEmail({
            email
        });
        const appKey = appKeys.length > 0 ? appKeys[0] : null;
        const key = appKey ? appKey.key : null;

        const query = GET_REPOSITORIES(owner, count);

        const result = await gitHubGql(key, {
            query
        });

        // add key id used to get these
        const repositoriesWithAppKeyId = result.data.data.user.repositories.edges.map(
            val => {
                const updated = {
                    ...val.node,
                    appKey: appKey.id
                };

                return updated;
            }
        );

        return repositoriesWithAppKeyId;
    }

    /**
     * Get fleshy detalls of a GitHub Repository for syncing with the stored Repository model
     *
     * @param email
     * @param repo
     * @param owner
     */
    async get(email: string, repo: string, owner: string) {
        this.logger.log(
            `Git Client getting Repo details for ${repo} belonging to ${owner}`
        );

        const appKeys = await this.appKeyService.getAllByUserIdOrEmail({
            email
        });
        const appKey = appKeys.length > 0 ? appKeys[0] : null;
        const key = appKey ? appKey.key : null;

        this.logger.log(`querying for ${repo} belonging to ${owner}`);

        const result = await gitHubGql(key, {
            query: GET_REPOSITORY_DETAILS(repo, owner)
        });

        const repositoryData = {
            ...result.data.data.repository,
            appKey: appKey.id
        };

        return repositoryData;
    }

    /**
     * Test a given AppKey by using it in a GET_USER_DATA query against the GitHub GraphQL API
     *
     * @param key
     * @param user
     */
    async testAppKey(key: string, user: string): Promise<boolean> {
        try {
            this.logger.log(
                `About to query the gitHubGql using ${key} to get the user data for ${user}`
            );
            const result = await gitHubGql(key, {
                query: GET_USER_DATA(user)
            });

            if (result.data.errors) {
                console.log('Detected errors: ', result.data.errors);
            }

            if (
                result.data == null ||
                result.data.data == null ||
                result.data.data.user == null
            ) {
                this.logger.error(
                    'Missing expected data to validate against in app key test.'
                );

                return false;
            }

            return true;
        } catch (e) {
            this.logger.error(
                'Error testing the app key: ' + e + ' likely invalid.'
            );
        }

        return false;
    }

    /**
     * Retrieve paginated commit data via the GraphQL API
     * @param user
     * @param repo
     * @param owner
     * @param first
     * @param afterCursor
     */
    async getCommits(
        email: string,
        repo: string,
        owner: string,
        first: number,
        afterCursor?: string
    ) {
        const appKeys = await this.appKeyService.getAllByUserIdOrEmail({
            email
        });
        const appKey = appKeys.length > 0 ? appKeys[0] : null;
        const key = appKey ? appKey.key : null;

        this.logger.log(`querying for ${repo} belonging to ${owner}`);

        const result = await gitHubGql(key, {
            query: GET_COMMITS(owner, repo, first, afterCursor)
        });

        return result;
    }
}
