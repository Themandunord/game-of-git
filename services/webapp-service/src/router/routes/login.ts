import { IRoute } from './IRoute.interface';
import { IRouteManagerContext } from './../RouteManager/IRouteManagerContext.interface';

export const LOGIN: IRoute = {
	path: '/login',
	name: 'login',
	displayName: 'Login',
	component: () => import(/* webpackChunkName: 'login' */ '@/components/Login.vue'),
	meta: {
		routemanager: (context: IRouteManagerContext) => {
			// don't show login if the user has a jwt (ie. is logged in)
			// tslint:disable-next-line:triple-equals
			return context.hasJwt != undefined ? !context.hasJwt : true;
		}
	}
};
