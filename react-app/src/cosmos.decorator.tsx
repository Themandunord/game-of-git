import { MockedProvider, MockedResponse } from '@apollo/react-testing';
import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoadingBar from './components/system/LoadingBar/LoadingBar';

import CoreContextProvider from './store/CoreContextProvider';
import theme from './theme';
import ThemeProvider from './theme/ThemeProvider';
import gql from './gql/apolloClient';

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

const mock: MockedResponse = {
    request: {
        query: '' as any,
        operationName: 'me',
    },
    result: {
        data: {
            me,
        },
    },
};

const Decorator: React.FC = ({ children }) => (
    // <ApolloProvider client={client}>
    <MockedProvider mocks={[mock]}>
        <MuiThemeProvider theme={theme}>
            <CoreContextProvider>
                <BrowserRouter>
                    <ThemeProvider>
                        <React.Suspense fallback={<LoadingBar show />}>
                            {children}
                        </React.Suspense>
                    </ThemeProvider>
                </BrowserRouter>
            </CoreContextProvider>
        </MuiThemeProvider>
    </MockedProvider>
    // </ApolloProvider>
);

export default Decorator;
