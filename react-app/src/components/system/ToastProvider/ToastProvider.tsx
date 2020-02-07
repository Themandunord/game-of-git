import React, { useContext, useMemo } from 'react';
import { SystemContext } from '../../../store/system';
import Toast from './Toast/Toast';

const ToastProvider: React.FC = ({ children }) => {
    const globalSystemState = useContext(SystemContext);
    const toast = globalSystemState.state.toast;

    const activeToast = useMemo(() => {
        return toast.toasts.length > 0 ? toast.toasts[0] : null;
    }, [toast.toasts]);
    return (
        <>
            {children}
            {activeToast && (
                <Toast id={activeToast.id}>{activeToast.children}</Toast>
            )}
        </>
    );
};

export default ToastProvider;
