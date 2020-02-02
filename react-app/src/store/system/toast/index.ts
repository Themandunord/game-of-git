import uuid from 'uuid';

export interface ToastProps {
    id: string;
    children?: any;
}

export interface ToastState {
    toasts: ToastProps[];
}

export const addToast = (children: any) => ({
    type: 'ADD_TOAST' as const,
    toast: {
        id: uuid.v4(),
        children,
    },
});
export const closeToast = (id: string) =>
    ({ type: 'CLOSE_TOAST', id } as const);

export type ToastActions = ReturnType<typeof addToast | typeof closeToast>;
