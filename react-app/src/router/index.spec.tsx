import { MockedResponse } from '@apollo/react-testing';
import { act } from '@testing-library/react';
import React from 'react';
import { LoadingBarProps } from '../components/system/LoadingBar/LoadingBar';
import ME from '../gql/queries/Me.gql';
import immediatelyAssertLoggedInRouterIsNotRendered from './testUtils/immediatelyAssertLoggedInRouterIsNotRendered copy';
import immediatelyAssertNoRouterIsRendered from './testUtils/ImmediatelyAssertNoRouterIsRendered';
import immediatelyAssertNotLoggedInRouterIsNotRendered from './testUtils/immediatelyAssertNotLoggedInRouterIsNotRendered';
import RouterIndexTest from './testUtils/RouterIndexTest';
import { LOGGED_IN_ROUTER, NOT_LOGGED_IN_ROUTER } from './testUtils/constants';

jest.mock('../components/system/LoadingBar/LoadingBar', () => {
    return function DummyLoadingBar(props: LoadingBarProps) {
        return (
            <div data-testid="loading-bar">{props.show ? 'show' : 'hide'}</div>
        );
    };
});

jest.mock('../router/LoggedIn/LoggedInRouter', () => {
    const { LOGGED_IN_ROUTER } = require('./testUtils/constants');
    return function DummyLoggedInRouter(props: React.FC) {
        return <div data-testid={LOGGED_IN_ROUTER}></div>;
    };
});

jest.mock('../router/NotLoggedIn/NotLoggedInRouter', () => {
    const { NOT_LOGGED_IN_ROUTER } = require('./testUtils/constants');
    return function DummyNotLoggedInRouter(props: React.FC) {
        return <div data-testid={NOT_LOGGED_IN_ROUTER}></div>;
    };
});

const me = {
    id: 'abc123',
    email: 'abc123',
    gitLogin: 'abc123',
    name: 'abc123',
    role: 'ADMIN',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    apiKeys: [
        {
            id: 'abc123',
            name: 'some key',
        },
    ],
};

describe('Router Index', () => {
    it("Renders with (1) the LoadingBar on display (indefinitely for this test) and (2) does not render the NotLoggedInRouter OR the LoggedInRouter while the user's login status is unknown", async () => {
        const { getByTestId, findByTestId } = RouterIndexTest([]);

        immediatelyAssertNoRouterIsRendered(getByTestId);

        await expect(findByTestId(LOGGED_IN_ROUTER)).rejects.toThrow(
            `Unable to find an element by: [data-testid="${LOGGED_IN_ROUTER}"]`,
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

        const { getByTestId, findByTestId } = RouterIndexTest([mock]);

        immediatelyAssertNoRouterIsRendered(getByTestId);

        await expect(findByTestId(LOGGED_IN_ROUTER)).rejects.toThrow(
            `Unable to find an element by: [data-testid="${LOGGED_IN_ROUTER}"]`,
        );

        await expect(findByTestId(NOT_LOGGED_IN_ROUTER)).resolves.toBeDefined();
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
                        me,
                    },
                };
            },
        };

        const { getByTestId, findByTestId } = RouterIndexTest([mock]);

        immediatelyAssertNoRouterIsRendered(getByTestId);

        // the loading bar should be shown until the user's auth context is known
        expect(() => getByTestId('loading-bar')).toBeDefined();
        const loadingBar = getByTestId('loading-bar');
        expect(loadingBar.textContent).toEqual('show');

        await findByTestId(LOGGED_IN_ROUTER);

        // It is known (or at least it should be) who the fuck you are.
        expect(meInvokedCount).toEqual(1);

        immediatelyAssertNotLoggedInRouterIsNotRendered(getByTestId);

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
                        me,
                    },
                };
            },
        };

        const { getByTestId, findByTestId } = RouterIndexTest([mock]);

        immediatelyAssertNoRouterIsRendered(getByTestId);

        // the loading bar should be shown until the user's auth context is known
        expect(() => getByTestId('loading-bar')).toBeDefined();
        const loadingBar = getByTestId('loading-bar');
        expect(loadingBar.textContent).toEqual('show');

        const logoutButton = await findByTestId('log-me-out');
        expect(loadingBar.textContent).toEqual('hide');

        await findByTestId(LOGGED_IN_ROUTER);

        // It is known (or at least it should be) who the fuck you are.
        expect(meInvokedCount).toEqual(1);

        // the not-logged-in router should not be rendered
        immediatelyAssertNotLoggedInRouterIsNotRendered(getByTestId);

        // the loading bar should be hidden now that your auth context is known and the logged in router is shown
        expect(loadingBar.textContent).toEqual('hide');

        act(() => {
            logoutButton.click();
        });

        immediatelyAssertLoggedInRouterIsNotRendered(getByTestId);

        await findByTestId(NOT_LOGGED_IN_ROUTER);
    });
});
