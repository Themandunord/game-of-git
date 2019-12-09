export const ADD_APP_KEY = {
	path: '/add-app-key',
	name: 'addAppKey',
	displayName: 'Add App Key',
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	component: () => import(/* webpackChunkName: "addAppKey" */ '@/views/AddAppKey.vue'),
	meta: {
		requiresAuth: true
	}
};
