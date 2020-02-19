import React, { useContext, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import PATH from '../routes';
import AppLayout from '../../components/layouts/AppLayout/AppLayout';
import { UserContext } from '../../store/user';
import LOGGED_IN_ROUTES from './LoggedInRoutes';

const LoggedInRouter: React.FC = () => {
    const { push } = useHistory();

    const { state } = useContext(UserContext);

    useEffect(() => {
        if (
            state.user &&
            (!state.user.apiKeys || state.user.apiKeys.length === 0)
        ) {
            push(PATH.ADD_API_KEY.path);
        }
    }, [state.user, push]);

    return (
        <AppLayout>
            <Route
                path="/"
                render={() => (
                    <Switch>
                        {LOGGED_IN_ROUTES.map(route => (
                            <Route
                                exact
                                path={route.path}
                                render={() => <route.render />}
                                key={route.path}
                            />
                        ))}
                        <Redirect to={PATH.NOT_FOUND.path} />
                    </Switch>
                )}
            />
        </AppLayout>
    );
};

export default LoggedInRouter;
