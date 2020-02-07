import { QueryLazyOptions, useLazyQuery } from '@apollo/react-hooks';
import React, { createContext, useEffect, useReducer } from 'react';
import RepositoriesListQuery from '../../gql/queries/RepositoriesListQuery.gql';
import { RepositoryListDataItem } from '../../pages/RepositoryList/types';
import { ReposActions, setRepos } from './repos';

type RepositoriesActions = ReposActions;

export interface RepositoriesState {
    // repositories: IRepository[];
    repositories: RepositoryListDataItem[];
}

const initialState: RepositoriesState = {
    repositories: [],
};

const reducer: React.Reducer<RepositoriesState, RepositoriesActions> = (
    state = initialState,
    action,
) => {
    switch (action.type) {
        case 'CLEAR_REPOS':
        case 'SET_REPOS':
            return { ...state, repositories: action.repositories };
        default:
            throw new Error(`Unknown action type ${action}`);
    }
};

export const RepositoriesContext = createContext<{
    state: typeof initialState;
    dispatch: (action: RepositoriesActions) => void;
    loadRepos: (
        options?: QueryLazyOptions<Record<string, any>> | undefined,
    ) => void;
    loadingRepositories: boolean;
}>({
    state: initialState,
    dispatch: () => {},
    loadRepos: () => {},
    loadingRepositories: false,
});

export const RepositoriesConsumer = RepositoriesContext.Consumer;

export const RepositoriesProvider = (props: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [
        getRepositories,
        { data: retrievedRepositories, loading: loadingRepositories },
    ] = useLazyQuery<{
        repositoryList: RepositoryListDataItem[];
    }>(RepositoriesListQuery);

    useEffect(() => {
        if (retrievedRepositories && retrievedRepositories.repositoryList) {
            dispatch(setRepos(retrievedRepositories.repositoryList));
        }
    }, [retrievedRepositories]);

    const value = {
        state,
        dispatch,
        loadRepos: getRepositories,
        loadingRepositories,
    };

    return (
        <RepositoriesContext.Provider value={value}>
            {props.children}
        </RepositoriesContext.Provider>
    );
};
