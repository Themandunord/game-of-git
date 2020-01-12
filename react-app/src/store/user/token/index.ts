/**
 * Set User Data state
 */
export const setToken = (token: string | null) => {
    if (token) {
        localStorage.setItem('token', token);
    } else {
        localStorage.removeItem('token');
    }

    return { type: 'SET_TOKEN', token } as const;
};

export type TokenActions = ReturnType<typeof setToken>;
