import { MeQuery } from '@game-of-git/graphql-nest';
import React, { createContext, useReducer } from 'react';
import { LoggedInActions } from './loggedIn';
import { TokenActions } from './token';
import { UserDataActions } from './userData';

let token = null;
try {
    token = localStorage.getItem('token');
} catch (e) {
    token = null;
}
type UserActions = LoggedInActions | UserDataActions | TokenActions;

export interface UserState {
    loggedIn: boolean;
    user: undefined | MeQuery['me'];
    token: string | null;
}

const loggedIn = token ? true : false;

const initialState: UserState = {
    loggedIn,
    user: undefined,
    token,
};

export const userReducer: React.Reducer<UserState, UserActions> = (
    state = initialState,
    action,
) => {
    switch (action.type) {
        case 'SET_IS_LOGGED_IN':
            return { ...state, loggedIn: true };
        case 'SET_NOT_LOGGED_IN':
            return { ...state, loggedIn: false };
        case 'SET_USER_DATA':
            return { ...state, user: action.user };
        case 'SET_TOKEN':
            return { ...state, token: action.token };
        default:
            throw new Error();
    }
};

export const UserContext = createContext<{
    state: typeof initialState;
    dispatch: (action: UserActions) => void;
}>({
    state: initialState,
    dispatch: () => {},
});

export const UserConsumer = UserContext.Consumer;

export const UserProvider = (props: any) => {
    const [state, dispatch] = useReducer(userReducer, initialState);
    const value = { state, dispatch };
    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
};
