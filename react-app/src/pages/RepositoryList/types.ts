export interface RepositoryListDataItem {
    createdAt: Date;
    description: string;
    id: string;
    isFork: boolean;
    isPrivate: boolean;
    isTracked: boolean;
    name: string;
    owner: {
        avatarUrl: string;
        id: string;
        login: string;
        url: string;
    };
    game: {
        id: string;
        name: string;
    };
    url: string;
    updatedAt: Date;
}
