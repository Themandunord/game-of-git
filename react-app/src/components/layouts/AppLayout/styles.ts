import { createStyles, makeStyles } from '@material-ui/core';

const drawerWidth = 240;

const useStyle = makeStyles(theme =>
    createStyles({
        root: {
            display: 'flex',
        },
        logoutButton: {
            position: 'absolute',
            bottom: 0,
            width: '100%',
        },
        toolbarIcon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 8px',
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
        },
        appBarSpacer: theme.mixins.toolbar as any,
        container: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
        },
        drawerPaper: {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerPaperClose: {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9),
            },
        },
        navLink: {
            color: theme.palette.text.primary,
        },
    }),
);

export default useStyle;
