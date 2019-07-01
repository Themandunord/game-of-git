import { IAppState } from '.';
import { getModule, Module, Mutation, MutationAction, VuexModule } from 'vuex-module-decorators';

import store from '@/store';

@Module({
  dynamic: true,
  store,
  name: 'appModule'
})
class AppState extends VuexModule implements IAppState {
  public navExpanded: boolean = false;

  public user: any = {};

  @Mutation
  public setNavExpanded(navExpanded?: boolean) {
    if (navExpanded != null) {
      this.navExpanded = navExpanded;
    } else {
      this.navExpanded = !this.navExpanded;
    }
  }

  @Mutation
  public setUser(user: any) {
    this.user = user;
  }

  get hasAppKey() {
    return this.user.hasAppKey;
  }
}

export default getModule(AppState);
