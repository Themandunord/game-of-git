import React, { createContext, useReducer } from 'react';
import { LoadingActions } from './loading';
import { NavActions } from './nav';

type SystemActions = LoadingActions | NavActions;

interface SystemState {
    loading: boolean;
    expanded: boolean;
}

const initialState: SystemState = {
    loading: false,
    expanded: false,
};

const reducer: React.Reducer<SystemState, SystemActions> = (
    state = initialState,
    action,
) => {
    switch (action.type) {
        case 'SET_LOADING':
            return { ...state, loading: action.loading };
        case 'SET_NAV_EXPANDED':
            return { ...state, expanded: action.expanded };
        default:
            throw new Error();
    }
};

export const SystemContext = createContext<{
    state: typeof initialState;
    dispatch: (action: SystemActions) => void;
}>({
    state: initialState,
    dispatch: () => {},
});

export const SystemConsumer = SystemContext.Consumer;

export const SystemProvider = (props: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return (
        <SystemContext.Provider value={value}>
            {props.children}
        </SystemContext.Provider>
    );
};
