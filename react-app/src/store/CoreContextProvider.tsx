import React from 'react';
import { UserProvider } from './user';
import { SystemProvider } from './system';
import { RepositoriesProvider } from './repositories';

const CoreContextProvider: React.FC = ({ children }) => {
    return (
        <SystemProvider>
            <UserProvider>
                <RepositoriesProvider>{children}</RepositoriesProvider>
            </UserProvider>
        </SystemProvider>
    );
};

export default CoreContextProvider;
