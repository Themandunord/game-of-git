import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import LoadingBar from './components/system/LoadingBar/LoadingBar';
import client from './gql/apolloClient';
import './index.css';
import AppRouter from './router';
import * as serviceWorker from './serviceWorker';
import CoreContextProvider from './store/CoreContextProvider';
import ThemeProvider from './theme/ThemeProvider';

const themedApp = (
    <BrowserRouter>
        <CoreContextProvider>
            <ThemeProvider>
                <React.Suspense fallback={<LoadingBar show />}>
                    <HelmetProvider>
                        <ApolloProvider client={client}>
                            <AppRouter />
                        </ApolloProvider>
                    </HelmetProvider>
                </React.Suspense>
            </ThemeProvider>
        </CoreContextProvider>
    </BrowserRouter>
);

ReactDOM.render(themedApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
