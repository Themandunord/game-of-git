import { UserState } from '../../../store/user';
import { RepositoriesState } from '../../../store/repositories';

export type IRouteArgs = {
    userState?: UserState;
    repoState?: RepositoriesState;
};

export type IRouteRule<T extends IRouteArgs = IRouteArgs> = (
    routeArgs: T,
) => boolean;
