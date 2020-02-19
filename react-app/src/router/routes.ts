import DashboardIcon from '@material-ui/icons/Dashboard';
import {
    AddApiKey,
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
import RequiresApiKey from './RouteManager/rules/RequiresApiKey';
import { RepositoriesState } from '../store/repositories';

const ADD_API_KEY = () =>
    ({
        path: '/add-api-key',
        icon: DashboardIcon,
        render: AddApiKey,
        name: 'Add Api Key',
        page: '/AddApiKey/AddApiKey',
        rule: [RequiresAuth],
    } as const);
const CREATE_GAME = () =>
    ({
        path: '/create-game/:name',
        icon: CreateGameIcon,
        render: CreateGame,
        name: 'Create Game',
        page: '/CreateGame/CreateGame',
        rules: [RequiresAuth, RequiresApiKey],
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
        rules: [RequiresAuth, RequiresApiKey],
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
    ADD_API_KEY: ADD_API_KEY(),
    CREATE_GAME: CREATE_GAME(),
    DASHBOARD: DASHBOARD(),
    GAME: GAME(),
    LOGIN: LOGIN(),
    NOT_FOUND: NOT_FOUND(),
    REPOSITORY_LIST: REPOSITORY_LIST(),
    SETTINGS: SETTINGS(),
} as const;

export default PATH;
