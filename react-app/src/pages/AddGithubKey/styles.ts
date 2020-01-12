import { createStyles, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme =>
    createStyles({
        paper: {
            marginTop: theme.spacing(3),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
    }),
);

export default useStyle;
