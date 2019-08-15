import { ConnectionState, DISCONNECTED, IConnectionState } from './IAppState.interface';
import { IAppState } from '.';
import { getModule, Module, Mutation, MutationAction, VuexModule } from 'vuex-module-decorators';

import store from '@/store';

interface IBaseUserData {
	email: null;
	exp: number;
	gitLogin: string;
	hasAppKey: boolean;
	iat: number;
	id: string;
	name: string;
	isAuthenticated: boolean;
}

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
		if (this.user == null) {
			return false;
		}

		return this.user.hasAppKey;
	}

	@Mutation
	public setConnectionState(state: ConnectionStateUpdate) {
		this.connection = { ...this.connection, ...state };
	}
}

export default getModule(AppState);
