import React from 'react';
import { RouteManagerProvider } from '../../router/RouteManager';

const Decorator: React.FC = ({ children }) => (
    <RouteManagerProvider>{children}</RouteManagerProvider>
);

export default Decorator;
