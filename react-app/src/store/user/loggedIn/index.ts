/**
 * Set Logged In state to true
 */
export const setIsLoggedIn = () =>
    ({ type: 'SET_IS_LOGGED_IN', loggedIn: true } as const);

/**
 * Set Logged In state to false
 */
export const setNotLoggedIn = () =>
    ({ type: 'SET_NOT_LOGGED_IN', loggedIn: false } as const);

export type LoggedInActions = ReturnType<
    typeof setIsLoggedIn | typeof setNotLoggedIn
>;
