export const MY_REPOSITORIES = {
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
