import AppStateModule from '@/store/aspects/app';
import HttpClient from '@/common/HttpClient';
import { IRepositoriesState } from './IRepositoriesState.interface';
import { getModule, Module, Mutation, MutationAction, VuexModule } from 'vuex-module-decorators';

import store from '@/store';

@Module({
	dynamic: true,
	store,
	name: 'repositoriesModule'
})
class RepositoriesState extends VuexModule implements IRepositoriesState {
	public repositories: any[] = []; // TODO: better typing

	@Mutation
	public setRepositories(repositories?: any[]) {
		if (repositories != null) {
			this.repositories = repositories;
		} else {
			this.repositories = this.repositories;
		}
	}

	@MutationAction({
		mutate: ['repositories']
	})
	public async syncStoredRepositories() {
		console.log('syncStoredRepositories call');
		if (AppStateModule.user && AppStateModule.user.isAuthenticated) {
			const repositories = await HttpClient.repositories.retrieveUsersStoredRepositories();
			console.log('returning ', repositories);
			return {
				repositories
			};
		}

		console.log('returning nada', AppStateModule.user);

		return {
			repositories: []
		};
	}

	@Mutation
	setRepository(repository: any) {
		this.repositories = this.repositories.map(val => {
			return {
				...val,
				...(repository.idExternal === val.idExternal ? repository : {})
			};
		});
	}

	@Mutation
	resetRepositories() {
		this.repositories = [];
	}
}

export default getModule(RepositoriesState);
