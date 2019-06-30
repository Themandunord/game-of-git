import { IRoute } from './IRoute.interface';
import Home from '@/views/Home.vue';

export const HOME: IRoute = {
  path: '/',
  name: 'home',
  displayName: 'Home',
  component: Home,
  meta: {
    requiresAuth: true
  }
};
