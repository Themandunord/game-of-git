import { RepositoryListDataItem } from '../../pages/RepositoryList/types';

const mockRepository: RepositoryListDataItem = {
    createdAt: new Date(),
    description: 'Some repo',
    game: null,
    id: 'abc123',
    isFork: false,
    isPrivate: false,
    isTracked: false,
    name: 'My Repository',
    owner: {
        avatarUrl: 'http://pcas.io/100/100',
        id: 'abc123',
        login: 'my-github-user',
        url: 'abc123.com',
    },
    updatedAt: new Date(),
    url: ' abc123.com',
};

export default mockRepository;
