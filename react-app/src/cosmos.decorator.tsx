import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoadingBar from './components/system/LoadingBar/LoadingBar';
import theme from './theme';
import client from './gql/apolloClient';
import { ApolloProvider } from '@apollo/react-hooks';
import CoreContextProvider from './store/CoreContextProvider';

const Decorator: React.FC = ({ children }) => (
    <ApolloProvider client={client}>
        <MuiThemeProvider theme={theme}>
            <CoreContextProvider>
                <BrowserRouter>
                    <CssBaseline />
                    <React.Suspense fallback={<LoadingBar show />}>
                        {children}
                    </React.Suspense>
                </BrowserRouter>
            </CoreContextProvider>
        </MuiThemeProvider>
    </ApolloProvider>
);

export default Decorator;
