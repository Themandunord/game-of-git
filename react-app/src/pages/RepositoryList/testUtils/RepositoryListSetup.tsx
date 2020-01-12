import React, { useReducer, Suspense, useContext } from 'react';
import { UserState, userReducer, UserContext } from '../../../store/user';
import { render } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/react-testing';
import { HelmetProvider } from 'react-helmet-async';
import LoggedInRouter from '../../../router/LoggedIn/LoggedInRouter';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import RepositoryList from '../RepositoryList';
import { setUserData } from '../../../store/user/userData';
import { Button } from '@material-ui/core';
import appKeyUserState from '../../../store/user/testUtils/AppKeyUserState';

const SetUserHasAppKeysButton = () => {
    const globalUserState = useContext(UserContext);
    const { dispatch: dispatchUser } = globalUserState;

    const setUser = () => dispatchUser(setUserData(appKeyUserState.user));

    return (
        <Button
            data-testid="set-user-data"
            variant="outlined"
            onClick={setUser}
        >
            SET User Data
        </Button>
    );
};

const RepositoryListSetup = (
    userState: UserState,
    apolloProviderMocks: MockedResponse[] = [],
) => {
    const history = createMemoryHistory();

    const UserContextProvider = (props: any) => {
        const [state, dispatch] = useReducer(userReducer, userState);
        const value = { state, dispatch };
        return (
            <UserContext.Provider value={value}>
                {props.children}
            </UserContext.Provider>
        );
    };

    const { getByTestId, findByTestId } = render(
        <Router history={history}>
            <UserContextProvider>
                <SetUserHasAppKeysButton />
                <MockedProvider mocks={apolloProviderMocks} addTypename={false}>
                    <HelmetProvider>
                        <Suspense fallback={null}>
                            <RepositoryList />
                        </Suspense>
                    </HelmetProvider>
                </MockedProvider>
            </UserContextProvider>
        </Router>,
    );

    return { getByTestId, findByTestId };
};

export default RepositoryListSetup;
