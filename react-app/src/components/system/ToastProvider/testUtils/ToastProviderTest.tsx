import React, { useContext, useEffect, useState } from 'react';
import { render } from '@testing-library/react';

import { SystemProvider, SystemContext } from '../../../../store/system';
import ToastProvider from '../ToastProvider';
import { addToast, closeToast } from '../../../../store/system/toast';

const DevAddToastButton: React.FC<{
    toastValues: any[] | undefined;
}> = ({ toastValues }) => {
    const globalSystemState = useContext(SystemContext);
    const { dispatch: dispatchSystem } = globalSystemState;

    const [index, setIndex] = useState<number>(0);

    return (
        <button
            onClick={() => {
                if (toastValues) {
                    dispatchSystem(addToast(toastValues[index]));
                    setIndex(i => i + 1);
                }
            }}
            data-testid="dev-add-toast"
        >
            DEV ADD TOAST BUTTON
        </button>
    );
};

const DevRemoveToastButton: React.FC = () => {
    const globalSystemState = useContext(SystemContext);
    const { dispatch: dispatchSystem } = globalSystemState;

    return (
        <button
            onClick={() => {
                dispatchSystem(
                    closeToast(globalSystemState.state.toast.toasts[0].id),
                );
            }}
            data-testid="dev-delete-toast"
        ></button>
    );
};

const ToastProviderTest = (children?: any, toasts?: any[]) => {
    const { getByTestId, findByTestId, container } = render(
        <SystemProvider>
            <DevAddToastButton toastValues={toasts} />
            <DevRemoveToastButton />
            <ToastProvider>{children}</ToastProvider>
        </SystemProvider>,
    );
    return { getByTestId, findByTestId, container };
};

export default ToastProviderTest;
