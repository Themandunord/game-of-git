import { UserState } from '..';

const noAppKeyUserState: UserState = {
    loggedIn: true,
    user: {
        id: 'abc 123',
        name: 'someone',
        createdAt: new Date().toISOString(),
        email: 'something@somewhere.com',
        gitLogin: 'something',
        updatedAt: new Date().toISOString(),
        appKeys: [],
    },
    token: 'abc123',
};

export default noAppKeyUserState;
