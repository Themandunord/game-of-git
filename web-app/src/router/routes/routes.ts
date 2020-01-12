import { LOGIN } from './login';
import { HOME } from './home';
import { REPOSITORIES } from './repositories';
import { REPOSITORY_DASHBOARD } from './repositoryDashboard';
import { ADD_APP_KEY } from './addAppKey';
import { SETUP_GAME } from './game/setupGame';

const ROUTES = [LOGIN, HOME, SETUP_GAME, REPOSITORIES, REPOSITORY_DASHBOARD, ADD_APP_KEY];

export { LOGIN, HOME, SETUP_GAME, REPOSITORIES, ROUTES, REPOSITORY_DASHBOARD, ADD_APP_KEY };
