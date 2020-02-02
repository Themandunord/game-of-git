import { IRoute } from '../IRoute.interface';
import Home from '@/views/home/Home.vue';
import { NO_APP_KEY } from './noAppKey';

export const HOME: IRoute = {
	path: '',
	name: 'home',
	displayName: 'Home',
	component: Home,
	meta: {
		requiresAuth: true
	},
	children: [NO_APP_KEY]
};
