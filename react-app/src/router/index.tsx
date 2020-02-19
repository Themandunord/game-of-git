import { useMeLazyQuery } from '@game-of-git/graphql-nest';
import React, { Suspense, useContext, useEffect, useState } from 'react';
import { Switch, useHistory, useLocation } from 'react-router-dom';
import LoadingBar from '../components/system/LoadingBar/LoadingBar';
import client from '../gql/apolloClient';
import { SystemContext } from '../store/system';
import { UserContext } from '../store/user';
import { setIsLoggedIn, setNotLoggedIn } from '../store/user/loggedIn';
import { setUserData } from '../store/user/userData';
import LoggedInRouter from './LoggedIn/LoggedInRouter';
import NotLoggedInRouter from './NotLoggedIn/NotLoggedInRouter';

const IndexRouter = () => {
    const globalSystemState = useContext(SystemContext);
    const globalUserState = useContext(UserContext);

    const [hasCheckedUserData, setHasCheckedUserData] = useState<boolean>(
        false,
    );

    const { dispatch: dispatchUser } = globalUserState;

    const loading = globalSystemState.state.loading;
    const loggedIn = globalUserState.state.loggedIn;

    const router = useHistory();
    useLocation();

    const [loadMe, { loading: meLoading, data: meData }] = useMeLazyQuery({
        client,
    });

    useEffect(() => {
        if (!meLoading) {
            if (meData && meData.me) {
                dispatchUser(setUserData(meData.me));
                dispatchUser(setIsLoggedIn());
            } else if (!meData && hasCheckedUserData) {
                dispatchUser(setUserData());
                dispatchUser(setNotLoggedIn());
            }
        }
    }, [meLoading, dispatchUser, meData, router, hasCheckedUserData]);

    useEffect(() => {
        loadMe();
        setHasCheckedUserData(true);
    }, [loggedIn, loadMe]);

    return (
        <>
            <LoadingBar show={loading || meLoading || !hasCheckedUserData} />
            <Switch>
                <Suspense fallback={null}>
                    {/* Routes for a user that is not logged in */}
                    {hasCheckedUserData && !meLoading && !loggedIn && (
                        <NotLoggedInRouter />
                    )}

                    {/* Routes for a user that is logged in */}
                    {hasCheckedUserData &&
                        !meLoading &&
                        loggedIn &&
                        globalUserState.state.user && <LoggedInRouter />}
                </Suspense>
            </Switch>
        </>
    );
};

export default IndexRouter;
