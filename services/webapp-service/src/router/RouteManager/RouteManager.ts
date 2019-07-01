import { IRoute } from '../routes';
import { IRouteManagerContext } from '.';

/**
 * RouteManager uses the users context to determine which routes should be shown to the end user at given times
 */
export class RouteManager<T extends IRouteManagerContext> {
    private addedRoutes: IRoute[] = [];

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

    get customRoutes() {
        return this.addedRoutes;
    }

    set customRoutes(routes: IRoute[]) {
        this.addedRoutes = routes;
    }

    /**
     * A User's currently accessible routes
     */
    get myRoutes() {
        const routes = this.routes.filter(val => {
            if (val.meta.hideFromNav === true) {
                return false;
            }
            if (val.meta.routemanager instanceof Function) {
                return val.meta.routemanager(this.context);
            }

            if (val.meta.routemanger instanceof Boolean) {
                return val.meta.routemanager;
            }

            if (val.meta.requiresAuth) {
                return this.context.hasJwt;
            }

            return true;
        });

        const customRoutes = this.addedRoutes.filter(val => {
            if (val.meta.hideFromNav === true) {
                return false;
            }
            if (val.meta.routemanager instanceof Function) {
                return val.meta.routemanager(this.context);
            }

            if (val.meta.routemanger instanceof Boolean) {
                return val.meta.routemanager;
            }

            if (val.meta.requiresAuth) {
                return this.context.hasJwt;
            }

            return true;
        });

        if (customRoutes.length > 0) {
            routes.push(...customRoutes);
        }

        return routes;
    }
}
