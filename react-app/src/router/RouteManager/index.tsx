import { SvgIconProps } from '@material-ui/core';
import React, {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState,
} from 'react';
import {
    RepositoriesContext,
    RepositoriesState,
} from '../../store/repositories';
import { UserContext } from '../../store/user';
import NAV_ROUTES from './NAV_ROUTES.const';
import { RouteManagerActions } from './routes';
import { IRouteRule } from './rules/types';

interface IRouteBase {
    path: string;
    icon: (props: SvgIconProps) => JSX.Element | null;
    render: any;
    name: string;
    page: string;
    rules?: any;
}
export interface IRoute extends IRouteBase {
    subRoutes?: (
        repoState: RepositoriesState,
    ) => { path: string; name: string }[];
}

export interface IComputedRoute extends IRouteBase {
    subRoutes?: { path: string; name: string }[];
}

export interface RouteManagerState {
    routes: IRoute[];
}

const initialRouteManagerState = {
    routes: NAV_ROUTES as IRoute[],
};

const RouteManagerReducer: React.Reducer<
    RouteManagerState,
    RouteManagerActions
> = (state = initialRouteManagerState, action) => {
    switch (action.type) {
        case 'SET_ROUTES':
            return { ...state, routes: action.routes as IRoute[] };
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
};

export const RouteManagerReducerFactory = (initialState: RouteManagerState) => (
    state = initialRouteManagerState,
    action: RouteManagerActions,
) => RouteManagerReducer(state, action);

export const RouteManagerContext = createContext<{
    state: RouteManagerState;
    dispatch: (action: RouteManagerActions) => void;
}>({ state: initialRouteManagerState, dispatch: () => {} });

export const RouteManagerConsumer = RouteManagerContext.Consumer;

export const RouteManagerProvider = (props: any) => {
    const [state, dispatch] = useReducer(
        RouteManagerReducer,
        initialRouteManagerState,
    );

    const [computedRoutes, setComputedRoutes] = useState<IComputedRoute[]>([]);

    const {
        state: userState,
        // , dispatch: userDispatch
    } = useContext(UserContext);

    const {
        state: repoState,
        // , dispatch: repoDispatch
    } = useContext(RepositoriesContext);

    useEffect(() => {
        const computedRoutes = state.routes
            .filter((route: IRoute) => {
                if (!route.rules) {
                    return true;
                }
                const rules = route.rules as IRouteRule[];

                const filterRoute = rules.reduce((acc, rule) => {
                    return acc && rule({ userState, repoState });
                }, true);
                return filterRoute;
            })
            .map(route => ({
                ...route,
                subRoutes: route.subRoutes
                    ? route.subRoutes(repoState)
                    : undefined,
            }));
        setComputedRoutes(computedRoutes);
    }, [state.routes, userState, setComputedRoutes, repoState]);

    const value = {
        state: {
            routes: computedRoutes,
        },
        dispatch,
    };
    return (
        <RouteManagerContext.Provider value={value as any}>
            {props.children}
        </RouteManagerContext.Provider>
    );
};
