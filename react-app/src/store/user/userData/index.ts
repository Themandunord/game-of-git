import { MeQuery } from '@game-of-git/graphql-nest';

/**
 * Set User Data state
 */
export const setUserData = (user?: MeQuery['me']) =>
    ({ type: 'SET_USER_DATA', user } as const);

export type UserDataActions = ReturnType<typeof setUserData>;
