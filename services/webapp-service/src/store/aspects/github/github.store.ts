import { IGitHubState } from '.';
import { getModule, Module, Mutation, MutationAction, VuexModule } from 'vuex-module-decorators';

import store from '@/store';

@Module({
	dynamic: true,
	store,
	name: 'githubModule'
})
class GitHubState extends VuexModule implements IGitHubState {
	public users: any = {};

	@Mutation
	addUser(user: any) {
		this.users.push(user);
	}
}

export default getModule(GitHubState);
