import { LoginUserData } from '../../../components/forms/LoginForm/types';

/**
 * Set User Data state
 */
export const setUserData = (user: LoginUserData | null) =>
    ({ type: 'SET_USER_DATA', user } as const);

export type UserDataActions = ReturnType<typeof setUserData>;
