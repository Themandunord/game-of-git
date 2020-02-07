/**
 * Importing Node Modules
 */
import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import useStyle from './styles';

export interface LoadingBarProps {
    show: boolean;
}

const LoadingBar: React.FC<LoadingBarProps> = props => {
    const { show } = props;
    const classes = useStyle(props);
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
