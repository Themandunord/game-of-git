import AppStateModule from '@/store/aspects/app';
import { AxiosInstance } from 'axios';
import AbstractHttpClient from './HttpClient.abstract';
import { RepositoriesClient } from './repositories.client';
import { UsersClient } from './users.client';

/**
 * Singleton Implementation of the `AbstractHttpClient`
 * Purpose-driven around
 *   - dividing the various API domains into easily usably keys such as `repository` and `users`
 */
export class HttpClient extends AbstractHttpClient {
  public repositories!: RepositoriesClient;
  public users!: UsersClient;

  constructor(client?: AxiosInstance) {
    super(client);
    this.repositories = new RepositoriesClient(this);
    this.users = new UsersClient(this);

    if (this.user) {
      this.refreshUserData();
    }
  }

  public async refreshUserData() {
    const userData = await this.users.loadUserData();
    this.user = {
      ...this.user,
      ...userData
    };
    AppStateModule.setUser({
      ...AppStateModule.user,
      ...userData
    });
  }
}
