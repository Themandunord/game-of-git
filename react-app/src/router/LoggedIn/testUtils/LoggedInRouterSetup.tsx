import { createMemoryHistory } from 'history';
import { UserState, userReducer, UserContext } from '../../../store/user';
import { useReducer, Suspense } from 'react';
import { Router } from 'react-router';
import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { HelmetProvider } from 'react-helmet-async';
import LoggedInRouter from '../LoggedInRouter';
import { render } from '@testing-library/react';

/**
 * Sets up a LoggedInRouter test
 *
 * @param route
 * @param userState
 */
const LoggedInRouterSetup = (route: { path: string }, userState: UserState) => {
    const history = createMemoryHistory();
    history.push(route.path);

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
                <MockedProvider mocks={[]} addTypename={false}>
                    <HelmetProvider>
                        <Suspense fallback={null}>
                            <LoggedInRouter />
                        </Suspense>
                    </HelmetProvider>
                </MockedProvider>
            </UserContextProvider>
        </Router>,
    );

    return { getByTestId, findByTestId };
};

export default LoggedInRouterSetup;
