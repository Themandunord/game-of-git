import React from 'react';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import theme, { darkModeTheme } from '.';

const ThemeProvider: React.FC = ({ children }) => (
    <MuiThemeProvider theme={false ? theme : darkModeTheme}>
        <CssBaseline />
        {children}
    </MuiThemeProvider>
);

export default ThemeProvider;
