import AbstractHttpClient from './HttpClient.abstract';
import HttpClient from '@/common/HttpClient';
import { AxiosInstance } from 'axios';

export class RepositoriesClient {
  constructor(private readonly client: AbstractHttpClient) {}

  public getRepositories() {
    console.log('get repositories');
  }

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

  public async toggleRepositoryTracking(repositoryData: any) {
    await this.client.post(
      `${AbstractHttpClient.apiUrl}/repositories/${this.client.user.id}/toggle-tracking/${repositoryData.idExternal}`,
      {
        repository: repositoryData
      }
    );
  }
}
