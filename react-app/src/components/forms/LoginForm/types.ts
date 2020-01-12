export interface LoginFormData {
    /**
     * User email, unique
     */
    email: string;

    /**
     * User password
     */
    password: string;
}

export interface LoginUserData {
    id: string;
    email: string;
    gitLogin: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    appKeys: {
        id: string;
    }[];
}

export interface LoginResponse {
    login: {
        token: string;
        user: LoginUserData;
    };
}
