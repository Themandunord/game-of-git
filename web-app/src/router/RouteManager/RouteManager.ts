import { IRoute } from '../routes';
import { IRouteManagerContext } from '.';
import { NavigationGuard, Route, RouteRecord } from 'vue-router';
import * as jsonwebtoken from 'jsonwebtoken';
import AppStateModule from '@/store/aspects/app';

/**
 * RouteManager uses the users context to determine which routes should be shown to the end user at given times
 */
export class RouteManager<T extends IRouteManagerContext> {
	private addedRoutes: Array<Partial<IRoute>> = [];

	constructor(private readonly routes: IRoute[]) {}

	private myContext: T = {
		hasJwt: false
	} as T;

	get context() {
		return this.myContext;
	}

	set context(data: Partial<IRouteManagerContext>) {
		this.myContext = {
			...this.myContext,
			...data
		};
	}

	public setContext(context: Partial<IRouteManagerContext>) {
		this.myContext = {
			...this.myContext,
			...context
		};
	}

	get customRoutes(): Array<Partial<IRoute>> {
		return this.addedRoutes;
	}

	set customRoutes(routes: Array<Partial<IRoute>>) {
		this.addedRoutes = routes;
	}

	private filterRoute(route: Partial<IRoute>): boolean {
		if (!route.meta) {
			return true;
		}
		// Main override
		if (route.meta.hideFromNav === true) {
			return false;
		}

		if (route.meta.routemanager instanceof Function) {
			return route.meta.routemanager(this.context);
		}

		if (route.meta.routemanger instanceof Boolean) {
			return route.meta.routemanager;
		}

		// TODO: iterate instead of evaluating ALL of them upfront, should be able to bail on first false.
		const metaRouteFilters = [
			this.evaluateRequiresAuthFilter(route),
			this.evaluateRequiresGitHubAuthTokenFilter(route)
		];

		const metaRouteFilterResult = metaRouteFilters.reduce((acc, curr) => acc && curr, true);

		return metaRouteFilterResult || false;
	}

	/**
	 * A User's currently accessible routes
	 */
	get myRoutes() {
		const routes: Array<Partial<IRoute>> = this.routes.filter(route => this.filterRoute(route));
		const customRoutes = this.addedRoutes.filter(route => this.filterRoute(route));

		if (customRoutes.length > 0) {
			routes.push(...customRoutes);
		}

		console.log('Computed Routes to Show for myRoutes: ', routes);

		return routes;
	}

	public runMetaMiddleware: NavigationGuard = (to, from, next) => {
		const jwt = localStorage.getItem('jwt');
		const hasJwt = jwt != undefined && jwt.length > 0;
		let parsedJwt = null;

		try {
			parsedJwt = jsonwebtoken.decode(jwt as string);
		} catch (e) {
			parsedJwt = null;
		}

		const hasGitHubAuthToken =
			(AppStateModule.user.appKeys && AppStateModule.user.appKeys.length > 0) || false;

		this.context = {
			hasJwt: !(!hasJwt || !parsedJwt),
			hasGitHubAuthToken
		};

		const authForcedRedirect = this.evaluateRequiresAuth(to, from, next);
		const gitHubAuthTokenForcedRedirect = this.evaluateRequiresGitHubAuthToken(to, from, next);
		next();
	};

	private evaluateRequiresAuthFilter = (route: Partial<IRoute>): boolean => {
		if (!route.meta.requiresAuth) {
			return true;
		}
		return this.context.hasJwt || false;
	};

	private evaluateRequiresAuth: NavigationGuard = (to, from, next) => {
		if (!to.matched.some(record => record.meta.requiresAuth)) {
			return false;
		}
		if (!this.context.hasJwt) {
			console.error("Missing JWT for Auth'd Route, redirecting to login.", this.context);
			next({
				name: 'login',
				params: { nextUrl: to.fullPath }
			});
			return true; // should this mean bail all and stop evaluating?
		}
		return false;
	};

	private evaluateRequiresGitHubAuthTokenFilter = (route: Partial<IRoute>): boolean => {
		if (!route.meta.requiresGitHubAuthToken) {
			return true;
		}
		return this.context.hasGitHubAuthToken || false;
	};

	private evaluateRequiresGitHubAuthToken: NavigationGuard = (to, from, next) => {
		if (!to.matched.some(record => record.meta.requiresGitHubAuthToken)) {
			return false;
		}
		console.log('evaluating requires github auth token with ', this.context);
		if (!this.context.hasGitHubAuthToken) {
			console.error('Route requires GitHub Auth Token, redirecting to AddAppKey');
			next({
				name: 'addAppKey',
				params: { nextUrl: to.fullPath }
			});
			return true;
		}
		return false;
	};
}
