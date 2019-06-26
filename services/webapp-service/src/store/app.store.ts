import { getModule, Module, Mutation, MutationAction, VuexModule } from 'vuex-module-decorators';

import store from '@/store';

export interface IAppState {
  navExpanded: boolean;
}

@Module({
  dynamic: true,
  store,
  name: 'appModule'
})
class AppState extends VuexModule implements IAppState {
  public navExpanded: boolean = false;

  @Mutation
  public setNavExpanded(navExpanded?: boolean) {
    if (navExpanded != null) {
      this.navExpanded = navExpanded;
    } else {
      this.navExpanded = !this.navExpanded;
    }
  }
}

export default getModule(AppState);
