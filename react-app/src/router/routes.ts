import DashboardIcon from '@material-ui/icons/Dashboard';
import {
    AddGithubKey,
    CreateGame,
    Dashboard,
    Game,
    Login,
    NotFound,
    RepositoryList,
    Settings,
} from '../pages';
import { CreateGameIcon, RepositoryListIcon, SettingsIcon } from './icons';
import RequiresAuth from './RouteManager/rules/RequiresAuth';
import RequiresGame from './RouteManager/rules/RequiresGame';
import RequiresGitHubAppKey from './RouteManager/rules/RequiresGitHubAppKey';
import { RepositoriesState } from '../store/repositories';

const ADD_GITHUB_KEY = () =>
    ({
        path: '/add-github-key',
        icon: DashboardIcon,
        render: AddGithubKey,
        name: 'Add GitHub Key',
        page: '/AddGithubKey/AddGithubKey',
        rule: [RequiresAuth],
    } as const);
const CREATE_GAME = () =>
    ({
        path: '/create-game/:name',
        icon: CreateGameIcon,
        render: CreateGame,
        name: 'Create Game',
        page: '/CreateGame/CreateGame',
        rules: [RequiresAuth, RequiresGitHubAppKey],
    } as const);
const DASHBOARD = () =>
    ({
        path: '/dashboard',
        icon: DashboardIcon,
        render: Dashboard,
        name: 'Dashboard',
        page: '/Dashboard/Dashboard',
        rules: [RequiresAuth, RequiresGame],
    } as const);
const GAME = () =>
    ({
        path: '/game/:name',
        icon: DashboardIcon,
        render: Game,
        name: 'Game',
        page: '/Game/Game',
        rules: [RequiresAuth, RequiresGame],
        subRoutes: (repoState: RepositoriesState) =>
            repoState.repositories
                .filter(repo => repo.isTracked)
                .map(repo => ({
                    path: `/game/${repo.name}`,
                    name: `${repo.name} Game`,
                })),
    } as const);
const LOGIN = () =>
    ({
        path: '/login',
        icon: DashboardIcon,
        render: Login,
        name: 'Login',
        page: '/Login/Login',
    } as const);
const NOT_FOUND = () =>
    ({
        path: '/not-found',
        icon: DashboardIcon,
        render: NotFound,
        name: 'Not Found',
        page: '/NotFound/NotFound',
    } as const);
const REPOSITORY_LIST = () =>
    ({
        path: '/repository-list',
        icon: RepositoryListIcon,
        render: RepositoryList,
        name: 'Repository List',
        page: '/RepositoryList/RepositoryList',
        rules: [RequiresAuth, RequiresGitHubAppKey],
    } as const);
const SETTINGS = () =>
    ({
        path: '/settings',
        icon: SettingsIcon,
        render: Settings,
        name: 'Settings',
        page: '/Settings/Settings',
        rules: [RequiresAuth],
    } as const);

const PATH = {
    ADD_GITHUB_KEY: ADD_GITHUB_KEY(),
    CREATE_GAME: CREATE_GAME(),
    DASHBOARD: DASHBOARD(),
    GAME: GAME(),
    LOGIN: LOGIN(),
    NOT_FOUND: NOT_FOUND(),
    REPOSITORY_LIST: REPOSITORY_LIST(),
    SETTINGS: SETTINGS(),
} as const;

export default PATH;
