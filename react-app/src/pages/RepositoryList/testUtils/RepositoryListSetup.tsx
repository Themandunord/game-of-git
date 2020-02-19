import { MockedProvider, MockedResponse } from '@apollo/react-testing';
import { Button } from '@material-ui/core';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React, { Suspense, useContext, useReducer } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Router } from 'react-router';
import { RepositoriesProvider } from '../../../store/repositories';
import { UserContext, userReducer, UserState } from '../../../store/user';
import apiKeyUserState from '../../../store/user/testUtils/ApiKeyUserState';
import { setUserData } from '../../../store/user/userData';
import RepositoryList from '../RepositoryList';

const SetUserHasApiKeysButton = () => {
    const globalUserState = useContext(UserContext);
    const { dispatch: dispatchUser } = globalUserState;

    const setUser = () => dispatchUser(setUserData(apiKeyUserState.user));

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
            <MockedProvider mocks={apolloProviderMocks} addTypename={false}>
                <RepositoriesProvider>
                    <UserContextProvider>
                        <SetUserHasApiKeysButton />
                        <HelmetProvider>
                            <Suspense fallback={null}>
                                <RepositoryList />
                            </Suspense>
                        </HelmetProvider>
                    </UserContextProvider>
                </RepositoriesProvider>
            </MockedProvider>
        </Router>,
    );

    return { getByTestId, findByTestId };
};

export default RepositoryListSetup;
