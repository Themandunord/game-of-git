/**
 * Set Loading state to true
 */
export const setIsLoading = () =>
    ({ type: 'SET_LOADING', loading: true } as const);

/**
 * Set Loading state to false
 */
export const setNotLoading = () =>
    ({ type: 'SET_LOADING', loading: false } as const);

export type LoadingActions = ReturnType<
    typeof setIsLoading | typeof setNotLoading
>;
