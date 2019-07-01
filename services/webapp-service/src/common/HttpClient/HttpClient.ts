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

    constructor(client?: AxiosInstance) {
        super(client);
        this.repositories = new RepositoriesClient(this);
        this.users = new UsersClient(this);
        console.log('HttpClient constructor', this.user);
        if (this.user) {
            console.log('refreshing user data becauuse `user` is set');
            this.refreshUserData();
        } else {
            // login redirect due to no jwt set
            console.log(
                'not refreshing user data because this.user is not set, redirecting to login'
            );

            // this.$router.push({
            //             name: path
            //         });
            router.push({
                name: LOGIN.name
            });
            this.validateJwtToken();
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

    public async validateJwtToken() {
        console.log('validating the jwt token');
        try {
            const userData = await this.users.loadUserData();
            console.log('returned userData in jwtToken validation: ', userData);

            return true;
        } catch (e) {
            console.error('There was an error querying for the usersData', e);

            return false;
        }
    }
}
