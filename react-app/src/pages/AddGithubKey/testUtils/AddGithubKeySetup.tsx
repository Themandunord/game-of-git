import { createMemoryHistory } from 'history';
import { UserState, userReducer, UserContext } from '../../../store/user';
import { useReducer, Suspense, useContext } from 'react';
import { Router } from 'react-router';
import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@testing-library/react';
import AddGithubKey from '../AddGithubKey';
import { PATH } from '../../../router/routes';
import { setUserData } from '../../../store/user/userData';
import appKeyUserState from '../../../store/user/testUtils/AppKeyUserState';
import { Button } from '@material-ui/core';

/**
 * Sets up a AddGithubKey test
 *
 * @param route
 * @param userState
 */
const AddGithubKeySetup = (userState: UserState) => {
    const history = createMemoryHistory();
    history.push(PATH.ADD_GITHUB_KEY.path);

    const UserContextProvider = (props: any) => {
        const [state, dispatch] = useReducer(userReducer, userState);
        const value = { state, dispatch };
        return (
            <UserContext.Provider value={value}>
                {props.children}
            </UserContext.Provider>
        );
    };

    const SetUserHasAppKeysButton = () => {
        const globalUserState = useContext(UserContext);
        const { dispatch: dispatchUser } = globalUserState;

        const setAppKeys = () =>
            dispatchUser(setUserData(appKeyUserState.user));

        return (
            <Button
                data-testid="set-app-keys"
                variant="outlined"
                onClick={setAppKeys}
            >
                SET APP KEYS
            </Button>
        );
    };

    const { getByTestId, findByTestId } = render(
        <Router history={history}>
            <UserContextProvider>
                <MockedProvider mocks={[]} addTypename={false}>
                    <HelmetProvider>
                        <SetUserHasAppKeysButton />
                        <Suspense fallback={null}>
                            <AddGithubKey />
                        </Suspense>
                    </HelmetProvider>
                </MockedProvider>
            </UserContextProvider>
        </Router>,
    );

    return { getByTestId, findByTestId, history } as const;
};

export default AddGithubKeySetup;
