export const REPOSITORY_DASHBOARD = {
    path: '/repositories/:id/dashboard',
    name: 'repository dashboard',
    props: true,
    displayName: 'Repository Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(
            /* webpackChunkName: "repository-dashboard" */ '@/views/repositoryDashboard/RepositoryDashboard.vue'
        ),
    meta: {
        requiresAuth: true,
        hideFromNav: true
    }
};
