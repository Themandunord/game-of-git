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
	public events: any[] = []; //TODO: better typing

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
		const repositories = await HttpClient.repositories.retrieveUsersStoredRepositories();

		return {
			repositories
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

	// todo: better typing and validation
	@Mutation
	public addEvent(event: any) {
		if (!event) {
			return;
		}

		this.events = [...this.events, event];
	}
}

export default getModule(RepositoriesState);
