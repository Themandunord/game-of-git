import React from 'react';
import { PATH } from '../routes';
import NotLoggedInRouterSetup from './testUtils/NotLoggedInRouterSetup';

// Mock the Login component to verify that's the one that gets rendered
jest.mock('../../pages/Login/Login', () => {
    return function DummyLogin() {
        return <div data-testid="login"></div>;
    };
});

describe('NotLoggedInRouter', () => {
    describe('Will always redirect to the login path', () => {
        describe('For registered routes', () => {
            for (let [key, value] of Object.entries(PATH)) {
                it(`${key}: "${value.name}"@"${value.path}"`, async () => {
                    const { getByTestId } = NotLoggedInRouterSetup(value.path);
                    expect(() => getByTestId('login')).toBeDefined();
                });
            }
        });

        it('For unknown routes', () => {
            const { getByTestId } = NotLoggedInRouterSetup('somewhere-else');
            expect(() => getByTestId('login')).toBeDefined();
        });
    });
});
