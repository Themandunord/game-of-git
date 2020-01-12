import {
    SET_LOGGED_IN,
    SET_USER,
    SetLoggedIn,
    SetUser,
    UserState,
} from './types';

export const setLoggedIn = (loggedIn: boolean): SetLoggedIn => ({
    type: SET_LOGGED_IN,
    loggedIn,
});

export const setUser = (user: UserState['user']): SetUser => {
    if (user) {
        localStorage.setItem(SET_USER, JSON.stringify(user));
    } else {
        localStorage.removeItem(SET_USER);
    }
    return {
        type: SET_USER,
        user,
    };
};
