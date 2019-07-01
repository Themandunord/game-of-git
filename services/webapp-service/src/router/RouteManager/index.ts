import ROUTES from '../routes';
import { IRouteManagerContext } from './IRouteManagerContext.interface';
import { RouteManager } from './RouteManager';

export { IRouteManagerContext, RouteManager };

export default new RouteManager<IRouteManagerContext>(ROUTES);
