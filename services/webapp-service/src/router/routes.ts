import Home from '@/views/Home.vue';
import { RouteConfig } from 'vue-router/types/router';
import { IRouteManagerContext } from './RouteManager';

export interface IRoute extends RouteConfig {
  displayName: string;
  // path: string;
  // name: string;
  // component: VueConstructor<Vue>
}

const HOME: IRoute = {
  path: '/',
  name: 'home',
  displayName: 'Home',
  component: Home,
  meta: {
    requiresAuth: true
  }
};

const LOGIN: IRoute = {
  path: '/login',
  name: 'login',
  displayName: 'Login',
  component: () => import(/* webpackChunkName: 'login' */ '@/components/Login.vue'),
  meta: {
    routemanager: (context: IRouteManagerContext) => {
      // don't show login if the user has a jwt (ie. is logged in)
      return context.hasJwt != undefined ? !context.hasJwt : true;
    }
  }
};

const MY_REPOSITORIES = {
  path: '/repositories',
  name: 'repositories',
  displayName: 'My Repositories',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "repositories" */ '@/views/MyRepositories.vue'),
  meta: {
    requiresAuth: true
  }
};

export const ROUTES = [LOGIN, HOME, MY_REPOSITORIES];
