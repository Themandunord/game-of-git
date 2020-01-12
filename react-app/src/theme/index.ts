import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { spacing } from './spacing';
import { typography } from './typography';
// import merge from 'lodash/merge';

const theme = createMuiTheme({
    palette: {
        primary: {
            dark: '#20263E',
            main: '#0376BB',
            light: '#3591c8',
        },
        secondary: {
            dark: '#077aaa',
            main: '#0AAFF4',
            light: '#3bbff6',
        },
        background: {
            default: '#F6F6F6',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#4A4A4A',
        },
    },

    overrides: {},

    typography,
    spacing,
});

export const darkModeTheme = createMuiTheme({
    palette: {
        primary: theme.palette.primary,
        secondary: theme.palette.secondary,
        type: 'dark',
        background: {
            paper: theme.palette.primary.dark,
        },
    },
});

const mergeTheme: Theme = {
    ...theme,
    // ...merge(inputTheme(theme), buttonTheme(theme) as Theme),
};

export default mergeTheme;
