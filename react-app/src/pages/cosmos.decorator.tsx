import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

const Decorator: React.FC = ({ children }) => (
    <HelmetProvider>{children}</HelmetProvider>
);

export default Decorator;
