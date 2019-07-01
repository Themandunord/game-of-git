import AbstractHttpClient from '../HttpClient.abstract';

/**
 * Repositories-specific domain of the HttpClient
 */
export class RepositoriesClient {
  constructor(private readonly client: AbstractHttpClient) {}

  public getRepositories() {
    // console.log('get repositories');
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
  }
}
