import React, { useCallback, useContext } from 'react';
import { Snackbar } from '@material-ui/core';
import { DEFAULT_TTL } from '../constants';
import MuiAlert from '@material-ui/lab/Alert';
import { closeToast, ToastProps } from '../../../../store/system/toast';
import { SystemContext } from '../../../../store/system';

/**
 * System Toast notification component.
 */
const Toast: React.FC<ToastProps> = ({ children, id }) => {
    const globalSystemState = useContext(SystemContext);
    const { dispatch: dispatchSystem } = globalSystemState;

    const handleClose = useCallback(() => {
        dispatchSystem(closeToast(id));
    }, [dispatchSystem, id]);
    console.log('Toast render');
    return (
        <>
            <Snackbar
                data-toast={id}
                open={true}
                autoHideDuration={DEFAULT_TTL}
                onClose={handleClose}
            >
                <MuiAlert elevation={6} variant="filled" onClick={handleClose}>
                    {children}
                </MuiAlert>
            </Snackbar>
        </>
    );
};

export default Toast;
