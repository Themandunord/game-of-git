import { RepositoryListDataItem } from '../../../pages/RepositoryList/types';

/**
 * Set Repositories
 */
export const setRepos = (repositories: RepositoryListDataItem[]) => ({
    type: 'SET_REPOS' as const,
    repositories,
});

/**
 * Clear Repositories
 */
export const clearRepos = () => ({
    type: 'CLEAR_REPOS' as const,
    repositories: [],
});

export type ReposActions = ReturnType<typeof setRepos | typeof clearRepos>;
