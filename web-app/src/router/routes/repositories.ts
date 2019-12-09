export const REPOSITORIES = {
	path: '/repositories',
	name: 'repositories',
	displayName: 'Repositories by User',
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	component: () =>
		import(/* webpackChunkName: "repositories" */ '@/views/repositories/Repositories.vue'),
	meta: {
		requiresAuth: true,
		requiresGitHubAuthToken: true
	}
};
