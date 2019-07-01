import Vue from 'vue';
import Vuex from 'vuex';
import { IAppState } from '@/store/aspects/app';
import { IRepositoriesState } from '@/store/aspects/repositories';

Vue.use(Vuex);

interface IStore {
  app: IAppState;
  repositories: IRepositoriesState;
}

export default new Vuex.Store<IStore>({});
