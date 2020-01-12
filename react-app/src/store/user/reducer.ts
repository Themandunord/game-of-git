import { UserState, UserActions, SET_LOGGED_IN, SET_USER, User } from './types';
import { Reducer } from 'redux';

let user: User | null;

try {
    const userData = localStorage.getItem(SET_USER);
    user = userData ? JSON.parse(userData) : null;
} catch (error) {
    if (error instanceof SyntaxError) {
        // If the data is corrupt, just remove it
        localStorage.removeItem(SET_USER);
    }
    user = null;
}

export const initialDefaultUserState: UserState = {
    loggedIn: false,
    user,
};

const UserReducer: Reducer<UserState, UserActions> = (
    state = initialDefaultUserState,
    action,
) => {
    switch (action.type) {
        case SET_LOGGED_IN:
            return {
                ...state,
                loggedIn: action.loggedIn,
            };
        case SET_USER:
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    }
};

export const UserReducerFactory = (initialState: UserState) => (
    state = initialState,
    action: UserActions,
) => UserReducer(state, action);

export default UserReducer;
