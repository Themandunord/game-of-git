type AppKey = {
    id: string;
    name: string;
};

export interface User {
    id: string;
    name: string;
    appKeys: AppKey[];
}

export interface UserState {
    loggedIn: boolean;
    user: User | null;
}

export const SET_LOGGED_IN = 'SET_LOGGED_IN';
export const SET_USER = 'SET_USER';

export interface SetLoggedIn {
    type: typeof SET_LOGGED_IN;
    loggedIn: UserState['loggedIn'];
}

export interface SetUser {
    type: typeof SET_USER;
    user: UserState['user'];
}

export type UserActions = SetLoggedIn | SetUser;
