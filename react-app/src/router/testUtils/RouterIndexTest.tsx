import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import { MockedProvider, MockedResponse, wait } from '@apollo/react-testing';
import { BrowserRouter } from 'react-router-dom';
import CoreContextProvider from '../../store/CoreContextProvider';
import IndexRouter from '..';
import { setNotLoggedIn } from '../../store/user/loggedIn';
import { UserContext } from '../../store/user';

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

const RouterIndexTest = (mocks: MockedResponse[]) => {
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

export default RouterIndexTest;
