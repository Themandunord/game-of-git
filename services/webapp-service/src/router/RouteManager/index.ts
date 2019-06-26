import { IRoute, ROUTES } from '../routes';

/**
 * Extensible context in the RouteManager for defining contextual parameters around route customizations
 */
export interface IRouteManagerContext {
  hasJwt?: boolean;
}

/**
 * RouteManager uses the users context to determine which routes should be shown to the end user at given times
 */
export class RouteManager<T extends IRouteManagerContext> {
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

  get myRoutes() {
    const routes = this.routes.filter(val => {
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

    return routes;
  }
}

export default new RouteManager<IRouteManagerContext>(ROUTES);
