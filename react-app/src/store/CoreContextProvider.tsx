import React from 'react';
import { UserProvider } from './user';
import { SystemProvider } from './system';

const CoreContextProvider: React.FC = ({ children }) => {
    return (
        <SystemProvider>
            <UserProvider>{children}</UserProvider>
        </SystemProvider>
    );
};

export default CoreContextProvider;
