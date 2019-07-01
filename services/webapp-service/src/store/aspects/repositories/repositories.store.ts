import { IRepositoriesState } from './IRepositoriesState.interface';
import { getModule, Module, Mutation, MutationAction, VuexModule } from 'vuex-module-decorators';

import store from '@/store';

@Module({
    dynamic: true,
    store,
    name: 'repositoriesModule'
})
class RepositoriesState extends VuexModule implements IRepositoriesState {
    public repositories: any[] = [];

    //   @MutationAction({
    //     mutate: ['repositories']
    //   })
    //   public async refreshRepositories() {
    //     const repositories = await HttpClient.repositories.getAll();
    //     console.log('got repositories: ', repositories);

    //     return {
    //       repositories: {}
    //     };
    //   }

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
        return {
            repositories: {
                ...this.repositories
            }
        };
    }
}

export default getModule(RepositoriesState);
