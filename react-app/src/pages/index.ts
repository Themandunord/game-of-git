import React from 'react';

export const Dashboard = React.lazy(() =>
    import(/* webpackChunkName: "Dashboard" */ './Dashboard/Dashboard'),
);

export const Game = React.lazy(() =>
    import(/* webpackChunkName: "Game" */ './Game/Game'),
);

export const RepositoryList = React.lazy(() =>
    import(
        /* webpackChunkName: "RepositoryList" */ './RepositoryList/RepositoryList'
    ),
);

export const NotFound = React.lazy(() =>
    import(/* webpackChunkName: "NotFound" */ './NotFound/NotFound'),
);

export const Settings = React.lazy(() =>
    import(/* webpackChunkName: "Settings" */ './Settings/Settings'),
);

export const Login = React.lazy(() =>
    import(/* webpackChunkName: "Login" */ './Login/Login'),
);

export const AddApiKey = React.lazy(() =>
    import(/* webpackChunkName: "AddApiKey" */ './AddApiKey/AddApiKey'),
);

export const CreateGame = React.lazy(() =>
    import(/* webpackChunkName: "CreateGame" */ './CreateGame/CreateGame'),
);
