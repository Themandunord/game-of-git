import Home from '@/views/Home.vue';
import { LOGIN } from './login';
import { HOME } from './home';
import { MY_REPOSITORIES } from './myRepositories';
import { REPOSITORY_DASHBOARD } from './repositoryDashboard';

const ROUTES = [LOGIN, HOME, MY_REPOSITORIES, REPOSITORY_DASHBOARD];

export { LOGIN, HOME, MY_REPOSITORIES, ROUTES, REPOSITORY_DASHBOARD };
