import { UserState } from '..';
import noApiKeyUserState from './NoApiKeyUserState';
import { MeQuery } from '@game-of-git/graphql-nest';
import { RepositoryProviders } from '@game-of-git/common';

const apiKeyUserState: UserState = {
    ...noApiKeyUserState,
    user: {
        ...(noApiKeyUserState.user as MeQuery['me']),
        apiKeys: [
            {
                id: 'asdfasdf',
                name: 'test key',
                provider: RepositoryProviders.Sample,
            },
        ],
    },
};

export default apiKeyUserState;
