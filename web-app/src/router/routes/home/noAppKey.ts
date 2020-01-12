import { IRoute } from '../IRoute.interface';
import NoAppKey from '../../../views/home/zero-state/no-app-key/NoAppKey.vue';

export const NO_APP_KEY: IRoute = {
	path: 'no-app-key',
	name: 'no-app-key',
	displayName: 'No App Key',
	component: () =>
		import(
			/* webpackChunkName: "no-app-key" */ '@/views/home/zero-state/no-app-key/NoAppKey.vue'
		),
	meta: {
		requiresAuth: true
	}
};
