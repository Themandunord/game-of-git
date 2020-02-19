import { MeQuery } from '@game-of-git/graphql-nest';
import { RepositoryProviders } from '@game-of-git/common';

const mockUser: MeQuery['me'] = {
    apiKeys: [
        {
            id: 'abc123',
            name: 'testkey',
            provider: RepositoryProviders.Sample,
        },
    ],
    createdAt: new Date().toISOString(),
    email: 'abc@gmail.com',
    gitLogin: 'my-github-user',
    id: 'abc123',
    name: 'some user',
    role: 'ADMIN' as any,
    updatedAt: new Date().toISOString(),
};

export default mockUser;
