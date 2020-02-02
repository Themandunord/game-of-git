import { createStyles, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme =>
    createStyles({
        progressBar: {
            backgroundColor: 'rgba(0,0,0,0)',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 10000,
            width: '100%',
        },
        blurOverly: {
            filter: 'blur(10px)',
            backgroundColor: 'rgba(0,0,0,0)',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 10000,
            width: '100%',
        },
    }),
);

export default useStyle;
