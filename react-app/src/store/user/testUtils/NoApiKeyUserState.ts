import { UserState } from '..';

const noApiKeyUserState: UserState = {
    loggedIn: true,
    user: {
        id: 'abc 123',
        name: 'someone',
        role: 'ADMIN' as any,
        createdAt: new Date().toISOString(),
        email: 'something@somewhere.com',
        gitLogin: 'something',
        updatedAt: new Date().toISOString(),
        apiKeys: [],
    },
    token: 'abc123',
};

export default noApiKeyUserState;
