import AbstractHttpClient from '../HttpClient.abstract';

/**
 * Repositories-specific domain of the HttpClient
 */
export class RepositoriesClient {
    constructor(private readonly client: AbstractHttpClient) {}

    public async retrieveUsersStoredRepositories() {
        console.log('retrieveUsersStoredRepositories');
        const reposResponse = await this.client.get(
            `${AbstractHttpClient.apiUrl}/repositories/${this.client.user.id}/sync-store`
        );

        if (reposResponse.status === 200) {
            return reposResponse.data;
        }
        throw new Error(`Error querying for repositories store sync: ${reposResponse.statusText}`);
    }

    /**
     * Load all currently tracked repositories and the trackable repositories of the given owner
     * @param owner
     */
    public async loadSelectableRepositories(owner?: string) {
        if (owner == null) {
            owner = this.client.user.gitLogin;
        }
        const selectables = await this.client.get(
            `${AbstractHttpClient.apiUrl}/repositories/${this.client.user.id}/select-set/${
                owner ? owner : this.client.user.gitLogin
            }`
        );

        if (selectables.status === 200) {
            return selectables.data;
        } else {
            return [];
        }
    }

    /**
     * Toggle the `isTracked` state of a repository
     * @param repositoryData
     */
    public async toggleRepositoryTracking(repositoryData: any) {
        await this.client.post(
            `${AbstractHttpClient.apiUrl}/repositories/${this.client.user.id}/toggle-tracking/${repositoryData.idExternal}`,
            {
                repository: repositoryData
            }
        );

        return true;
    }
}
