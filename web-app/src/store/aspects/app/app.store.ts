import {
	ConnectionState,
	DISCONNECTED,
	IConnectionState,
	IBaseUserData
} from './IAppState.interface';
import { IAppState } from '.';
import { getModule, Module, Mutation, MutationAction, VuexModule } from 'vuex-module-decorators';
import routeManager from '@/router/RouteManager';
import store from '@/store';

interface StateUpdate {
	state: ConnectionState;
}
interface ReconnectAttemptUpdate {
	reconnectAttempt: number;
}
type ConnectionStateUpdate = StateUpdate | ReconnectAttemptUpdate;

@Module({
	dynamic: true,
	store,
	name: 'appModule'
})
class AppState extends VuexModule implements IAppState {
	public navExpanded: boolean = false;

	public connection: IConnectionState = {
		reconnectAttempt: null,
		state: DISCONNECTED
	};

	public user: Partial<IBaseUserData> = {};

	public jwt: string | null = null;

	@Mutation
	public setJwt(jwt: string | null) {
		this.jwt = jwt;
		localStorage.setItem('jwt', jwt ? jwt : '');
	}

	@Mutation
	public logout() {
		this.jwt = null;
		localStorage.clear();
		window.location.reload();
	}

	@Mutation
	public setNavExpanded(navExpanded?: boolean) {
		if (navExpanded != null) {
			this.navExpanded = navExpanded;
		} else {
			this.navExpanded = !this.navExpanded;
		}
	}

	@Mutation resetUser() {
		this.user = {
			email: null,
			exp: 0,
			gitLogin: null,
			hasAppKey: null,
			iat: null,
			id: null,
			name: null,
			isAuthenticated: null
		} as any;
	}
	@Mutation
	public setUser(user: any) {
		this.user = user;
	}

	get hasAppKey() {
		if (this.user == null || this.user.appKeys == null) {
			return false;
		}

		return this.user.appKeys.length > 0;
	}

	@Mutation
	public setConnectionState(state: ConnectionStateUpdate) {
		this.connection = { ...this.connection, ...state };
	}
}

export default getModule(AppState);
