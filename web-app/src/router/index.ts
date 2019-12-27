import routeManager from '@/router/RouteManager';
import { ROUTES } from './routes';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: ROUTES
});

router.beforeEach((to, from, next) => {
	console.log('about to run Meta Middleware');
	routeManager.runMetaMiddleware(to, from, next);
});

export default router;
