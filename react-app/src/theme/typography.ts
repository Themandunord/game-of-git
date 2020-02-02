import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

const pxToRem = (px: number) => `${px / 12}rem`;

export const typography: ThemeOptions['typography'] = {
    fontSize: 16,
    htmlFontSize: 16,
    h1: {
        fontSize: '32px',
        lineHeight: pxToRem(38 * 2)
    },
    h2: {
        fontSize: '28px',
        lineHeight: pxToRem(26 * 2)
    },
    h3: {
        fontSize: '22px',
        lineHeight: pxToRem(26 * 2)
    },
    h4: {
        fontSize: '18px',
        lineHeight: pxToRem(26 * 2)
    },
    h5: {
        fontSize: '24px',
        lineHeight: '28px',
        fontWeight: 300
    },
    h6: {
        fontSize: '22px',
        fontWeight: 700
    },
    subtitle1: {
        fontSize: '18px',
        fontWeight: 700
    },
    subtitle2: {
        fontSize: '16px'
    },
    body1: {
        fontSize: '16px',
        lineHeight: '22px'
    },
    body2: {
        fontSize: '14px',
        lineHeight: '20px'
    },
    button: {
        textTransform: 'none'
    },
    caption: {
        fontSize: '12px',
        lineHeight: '16px'
    }
};

export const typographyOverrides: ThemeOptions['overrides'] = {
    MuiTypography: {
        h1: {
            whiteSpace: 'nowrap'
        },
        h2: {
            whiteSpace: 'nowrap'
        },
        h3: {
            whiteSpace: 'nowrap'
        },
        h4: {
            whiteSpace: 'nowrap'
        },
        body1: {
            color: '#797F87'
        },
        body2: {
            color: '#797F87'
        }
    }
};
