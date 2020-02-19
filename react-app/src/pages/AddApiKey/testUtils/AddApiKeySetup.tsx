import { createMemoryHistory } from 'history';
import { UserState, userReducer, UserContext } from '../../../store/user';
import { useReducer, Suspense, useContext } from 'react';
import { Router } from 'react-router';
import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@testing-library/react';
import AddApiKey from '../AddApiKey';
import PATH from '../../../router/routes';
import { setUserData } from '../../../store/user/userData';
import apiKeyUserState from '../../../store/user/testUtils/ApiKeyUserState';
import { Button } from '@material-ui/core';

/**
 * Sets up a AddApiKey test
 *
 * @param route
 * @param userState
 */
const AddApiKeySetup = (userState: UserState) => {
    const history = createMemoryHistory();
    history.push(PATH.ADD_API_KEY.path);

    const UserContextProvider = (props: any) => {
        const [state, dispatch] = useReducer(userReducer, userState);
        const value = { state, dispatch };
        return (
            <UserContext.Provider value={value}>
                {props.children}
            </UserContext.Provider>
        );
    };

    const SetUserHasApiKeysButton = () => {
        const globalUserState = useContext(UserContext);
        const { dispatch: dispatchUser } = globalUserState;

        const setApiKeys = () =>
            dispatchUser(setUserData(apiKeyUserState.user));

        return (
            <Button
                data-testid="set-api-keys"
                variant="outlined"
                onClick={setApiKeys}
            >
                SET API KEYS
            </Button>
        );
    };

    const { getByTestId, findByTestId } = render(
        <Router history={history}>
            <UserContextProvider>
                <MockedProvider mocks={[]} addTypename={false}>
                    <HelmetProvider>
                        <SetUserHasApiKeysButton />
                        <Suspense fallback={null}>
                            <AddApiKey />
                        </Suspense>
                    </HelmetProvider>
                </MockedProvider>
            </UserContextProvider>
        </Router>,
    );

    return { getByTestId, findByTestId, history } as const;
};

export default AddApiKeySetup;
