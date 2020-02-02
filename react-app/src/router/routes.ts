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

const ADD_GITHUB_KEY = () => ({
    path: '/add-github-key',
    icon: DashboardIcon,
    render: AddGithubKey,
    name: 'Add GitHub Key',
    page: '/AddGithubKey/AddGithubKey',
});
const CREATE_GAME = () =>
    ({
        path: '/create-game/:name',
        icon: DashboardIcon,
        render: CreateGame,
        name: 'Create Game',
        page: '/CreateGame/CreateGame',
    } as const);
const DASHBOARD = () =>
    ({
        path: '/dashboard',
        icon: DashboardIcon,
        render: Dashboard,
        name: 'Dashboard',
        page: '/Dashboard/Dashboard',
    } as const);
const GAME = () =>
    ({
        path: '/game',
        icon: DashboardIcon,
        render: Game,
        name: 'Game',
        page: '/Game/Game',
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
        icon: DashboardIcon,
        render: RepositoryList,
        name: 'Repository List',
        page: '/RepositoryList/RepositoryList',
    } as const);
const SETTINGS = () =>
    ({
        path: '/settings',
        icon: DashboardIcon,
        render: Settings,
        name: 'Settings',
        page: '/Settings/Settings',
    } as const);

export const PATH = {
    ADD_GITHUB_KEY: ADD_GITHUB_KEY(),
    CREATE_GAME: CREATE_GAME(),
    DASHBOARD: DASHBOARD(),
    GAME: GAME(),
    LOGIN: LOGIN(),
    NOT_FOUND: NOT_FOUND(),
    REPOSITORY_LIST: REPOSITORY_LIST(),
    SETTINGS: SETTINGS(),
} as const;
