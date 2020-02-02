import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PATH from '../routes';

const NotLoggedInRouter: React.FC = () => {
    return (
        <Route
            path="/"
            render={() => (
                <Switch>
                    <Route
                        exact
                        path={PATH.LOGIN.path}
                        render={() => <PATH.LOGIN.render />}
                    />
                    <Redirect to={PATH.LOGIN.path} />
                </Switch>
            )}
        />
    );
};

export default NotLoggedInRouter;
