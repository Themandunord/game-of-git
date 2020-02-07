import PATH from '../routes';

/**
 * Routes available to a logged in user (simple)
 */
const LOGGED_IN_ROUTES = [
    PATH.DASHBOARD,
    PATH.REPOSITORY_LIST,
    PATH.GAME,
    PATH.SETTINGS,
    PATH.NOT_FOUND,
    PATH.ADD_GITHUB_KEY,
    PATH.CREATE_GAME,
] as const;

export default LOGGED_IN_ROUTES;
