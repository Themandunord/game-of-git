import { GamesClient } from './games/games.client';
import { LOGIN } from './../../router/routes/login';
import AppStateModule from '@/store/aspects/app';
import { AxiosInstance } from 'axios';
import AbstractHttpClient from './HttpClient.abstract';
import { RepositoriesClient } from './repositories/repositories.client';
import { UsersClient } from './users/users.client';
import router from '@/router';

/**
 * Singleton Implementation of the `AbstractHttpClient`
 * Purpose-driven around
 *   - dividing the various API domains into easily usably keys such as `repository` and `users`
 */
export class HttpClient extends AbstractHttpClient {
	public repositories!: RepositoriesClient;
	public users!: UsersClient;
	public games!: GamesClient;

	constructor(client?: AxiosInstance) {
		super(client);
		this.repositories = new RepositoriesClient(this);
		this.users = new UsersClient(this);
		this.games = new GamesClient(this);

		if (this.user) {
			this.refreshUserData();
		} else {
			// login redirect due to no jwt set
			console.log(
				'not refreshing user data because this.user is not set, redirecting to login'
			);

			router.push({
				name: LOGIN.name
			});
			this.validateJwtToken();
		}
	}

	public async refreshUserData() {
		if (AppStateModule.user && AppStateModule.user.isAuthenticated) {
			const userData = await this.users.loadUserData();
			AppStateModule.setUser({
				...AppStateModule.user,
				...userData
			});
		}
	}

	public async validateJwtToken() {
		try {
			if (AppStateModule.user && AppStateModule.user.isAuthenticated) {
				const userData = await this.users.loadUserData();

				return true;
			}

			console.log('There was no user property in the store, was unable to loadUserData.');

			return false;
		} catch (e) {
			console.error('There was an error querying for the usersData', e);

			return false;
		}
	}
}
