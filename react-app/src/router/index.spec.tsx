import { MockedProvider, MockedResponse, wait } from '@apollo/react-testing';
import { render, waitForElement, act } from '@testing-library/react';
import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import IndexRouter from '.';
import { LoadingBarProps } from '../components/system/LoadingBar/LoadingBar';
import ME from '../gql/queries/Me.gql';
import CoreContextProvider from '../store/CoreContextProvider';
import { UserContext } from '../store/user';
import { setNotLoggedIn } from '../store/user/loggedIn';

jest.mock('../components/system/LoadingBar/LoadingBar', () => {
    return function DummyLoadingBar(props: LoadingBarProps) {
        return (
            <div data-testid="loading-bar">{props.show ? 'show' : 'hide'}</div>
        );
    };
});

jest.mock('../router/LoggedIn/LoggedInRouter', () => {
    return function DummyLoggedInRouter(props: React.FC) {
        return <div data-testid="logged-in-router"></div>;
    };
});

jest.mock('../router/NotLoggedIn/NotLoggedInRouter', () => {
    return function DummyNotLoggedInRouter(props: React.FC) {
        return <div data-testid="not-logged-in-router"></div>;
    };
});

const DevLogoutButton: React.FC = () => {
    const globalUserState = useContext(UserContext);
    const { dispatch: dispatchUser } = globalUserState;

    return (
        <button
            onClick={() => dispatchUser(setNotLoggedIn())}
            data-testid="log-me-out"
        >
            BUTTON
        </button>
    );
};

const setupRouterIndexTest = (mocks: MockedResponse[]) => {
    const { getByTestId, findByTestId } = render(
        <BrowserRouter>
            <CoreContextProvider>
                <DevLogoutButton />
                <MockedProvider mocks={mocks} addTypename={false}>
                    <IndexRouter />
                </MockedProvider>
            </CoreContextProvider>
        </BrowserRouter>,
    );
    return {
        getByTestId,
        findByTestId,
    };
};

describe('Router Index', () => {
    it("Renders with (1) the LoadingBar on display (indefinitely for this test) and (2) does not render the NotLoggedInRouter OR the LoggedInRouter while the user's login status is unknown", async () => {
        const { getByTestId, findByTestId } = setupRouterIndexTest([]);

        // ensure that immediately the logged in and not logged in routers are not yet rendered
        expect(() => getByTestId('logged-in-router')).toThrow();
        expect(() => getByTestId('not-logged-in-router')).toThrow();

        await expect(findByTestId('logged-in-router')).rejects.toThrow(
            'Unable to find an element by: [data-testid="logged-in-router"]',
        );
    });

    it("Renders with (1) the LoadingBar on display (indefinitely for this test) and (2) does not render the NotLoggedInRouter OR the LoggedInRouter while the user's login status is unknown", async () => {
        const mock: MockedResponse = {
            request: {
                query: ME,
            },
            result: {
                errors: [],
            },
        };

        const { getByTestId, findByTestId } = setupRouterIndexTest([mock]);
        // ensure that immediately the logged in and not logged in routers are not yet rendered
        expect(() => getByTestId('logged-in-router')).toThrow();
        expect(() => getByTestId('not-logged-in-router')).toThrow();

        await expect(findByTestId('logged-in-router')).rejects.toThrow(
            'Unable to find an element by: [data-testid="logged-in-router"]',
        );

        await expect(
            findByTestId('not-logged-in-router'),
        ).resolves.toBeDefined();
    });

    it('Renders with (1) the LoadingBar on display until it receives the "me" data response then (2) renders the LoggedInRouter', async () => {
        let meInvokedCount = 0;
        const mock: MockedResponse = {
            request: {
                query: ME,
                operationName: 'me',
            },
            result: () => {
                ++meInvokedCount;
                return {
                    data: {
                        me: {
                            id: 'abc123',
                            email: 'abc123',
                            gitLogin: 'abc123',
                            name: 'abc123',
                            role: 'ADMIN',
                            createdAt: Date.now(),
                            updatedAt: Date.now(),
                            appKeys: [
                                {
                                    id: 'abc123',
                                    name: 'some key',
                                },
                            ],
                        },
                    },
                };
            },
        };

        const { getByTestId, findByTestId } = setupRouterIndexTest([mock]);
        // Immediately the logged in router AND the not logged in router should be hidden and not rendered
        expect(() => getByTestId('logged-in-router')).toThrow();
        expect(() => getByTestId('not-logged-in-router')).toThrow();

        // the loading bar should be shown until the user's auth context is known
        expect(() => getByTestId('loading-bar')).toBeDefined();
        const loadingBar = getByTestId('loading-bar');
        expect(loadingBar.textContent).toEqual('show');

        // wait for the element to render, 50ms seems reasonable in dev testing. This no longer throwing an error or timing out is proof that the loggedInRouter has rendered.
        const loggedInRouter = await waitForElement(
            () => getByTestId('logged-in-router'),
            {
                timeout: 50,
            },
        );

        // It is known (or at least it should be) who the fuck you are.
        expect(meInvokedCount).toEqual(1);

        // the not-logged-in router should not be rendered
        await expect(() => getByTestId('not-logged-in-router')).toThrow(
            'Unable to find an element by: [data-testid="not-logged-in-router"]',
        );

        // the loading bar should be hidden now that your auth context is known and the logged in router is shown
        expect(loadingBar.textContent).toEqual('hide');
    });

    it('Redirects to the NotLoggedInRouter when the loggedIn state changes to false', async () => {
        let meInvokedCount = 0;
        const mock: MockedResponse = {
            request: {
                query: ME,
                operationName: 'me',
            },
            result: () => {
                ++meInvokedCount;
                return {
                    data: {
                        me: {
                            id: 'abc123',
                            email: 'abc123',
                            gitLogin: 'abc123',
                            name: 'abc123',
                            role: 'ADMIN',
                            createdAt: Date.now(),
                            updatedAt: Date.now(),
                            appKeys: [
                                {
                                    id: 'abc123',
                                    name: 'some key',
                                },
                            ],
                        },
                    },
                };
            },
        };

        const { getByTestId, findByTestId } = setupRouterIndexTest([mock]);

        // Immediately the logged in router AND the not logged in router should be hidden and not rendered
        expect(() => getByTestId('logged-in-router')).toThrow();
        expect(() => getByTestId('not-logged-in-router')).toThrow();

        // the loading bar should be shown until the user's auth context is known
        expect(() => getByTestId('loading-bar')).toBeDefined();
        const loadingBar = getByTestId('loading-bar');
        expect(loadingBar.textContent).toEqual('show');

        const logoutButton = await findByTestId('log-me-out');
        expect(loadingBar.textContent).toEqual('hide');

        // wait for the element to render, 50ms seems reasonable in dev testing. This no longer throwing an error or timing out is proof that the loggedInRouter has rendered.
        const loggedInRouter = await waitForElement(
            () => getByTestId('logged-in-router'),
            {
                timeout: 50,
            },
        );
        // It is known (or at least it should be) who the fuck you are.
        expect(meInvokedCount).toEqual(1);

        // the not-logged-in router should not be rendered
        await expect(() => getByTestId('not-logged-in-router')).toThrow(
            'Unable to find an element by: [data-testid="not-logged-in-router"]',
        );

        // the loading bar should be hidden now that your auth context is known and the logged in router is shown
        expect(loadingBar.textContent).toEqual('hide');

        act(() => {
            logoutButton.click();
        });

        await expect(() => getByTestId('logged-in-router')).toThrow(
            'Unable to find an element by: [data-testid="logged-in-router"]',
        );
        await findByTestId('not-logged-in-router');
    });
});
