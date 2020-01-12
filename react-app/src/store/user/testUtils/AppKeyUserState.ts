import { UserState } from '..';
import noAppKeyUserState from './NoAppKeyUserState';
import { LoginUserData } from '../../../components/forms/LoginForm/types';

const appKeyUserState: UserState = {
    ...noAppKeyUserState,
    user: {
        ...(noAppKeyUserState.user as LoginUserData),
        appKeys: [
            {
                id: 'asdfasdf',
            },
        ],
    },
};

export default appKeyUserState;
