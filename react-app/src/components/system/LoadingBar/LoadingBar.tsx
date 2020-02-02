/**
 * Importing Node Modules
 */
import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
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
});

export interface LoadingBarProps {
    show: boolean;
}

const LoadingBar: React.FC<LoadingBarProps> = props => {
    const { show } = props;
    const classes = useStyles(props);
    return (
        <>
            {show && (
                <>
                    <LinearProgress
                        className={classes.blurOverly}
                        color="secondary"
                    />
                    <LinearProgress
                        className={classes.progressBar}
                        color="secondary"
                    />
                </>
            )}
        </>
    );
};

export default LoadingBar;
