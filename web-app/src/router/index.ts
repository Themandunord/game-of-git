import routeManager from '@/router/RouteManager';
import { ROUTES } from './routes';
import Vue from 'vue';
import Router from 'vue-router';

import * as jsonwebtoken from 'jsonwebtoken';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: ROUTES
});

router.beforeEach((to, from, next) => {
	const jwt = localStorage.getItem('jwt');
	const hasJwt = jwt != undefined && jwt.length > 0;
	let parsedJwt = null;

	try {
		parsedJwt = jsonwebtoken.decode(jwt as string);
	} catch (e) {
		parsedJwt = null;
	}

	routeManager.context = {
		hasJwt
	};

	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (!hasJwt || !parsedJwt) {
			console.log('missing jwt, redirecting to login');
			next({
				name: 'login',
				params: { nextUrl: to.fullPath }
			});

			return;
		}
		next();
		//  else {
		//     let user = JSON.parse(localStorage.getItem('user'))
		//     if(to.matched.some(record => record.meta.is_admin)) {
		//         if(user.is_admin == 1){
		//             next()
		//         }
		//         else{
		//             next({ name: 'userboard'})
		//         }
		//     }else {
		//         next()
		//     }
		// }
	} else if (to.matched.some(record => record.meta.guest)) {
		if (!hasJwt) {
			next();
		} else {
			next({ name: 'userboard' });
		}
	} else {
		next();
	}
});

export default router;
