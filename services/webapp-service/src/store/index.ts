import Vue from 'vue';
import Vuex from 'vuex';
import { IAppState } from '@/store/aspects/app';
import { IRepositoriesState } from '@/store/aspects/repositories';
import { IGitHubState } from '@/store/aspects/github';

Vue.use(Vuex);

interface IStore {
	app: IAppState;
	repositories: IRepositoriesState;
	github: IGitHubState;
}

export default new Vuex.Store<IStore>({});
