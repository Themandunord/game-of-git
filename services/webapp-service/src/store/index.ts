import Vue from 'vue';
import Vuex from 'vuex';
import { IAppState } from '@/store/app.store';
import { IRepositoriesState } from '@/store/repositories.store';

Vue.use(Vuex);

interface IStore {
  app: IAppState;
  repositories: IRepositoriesState;
}

export default new Vuex.Store<IStore>({});
