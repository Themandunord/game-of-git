import React from 'react';
import { MockedResponse, wait } from '@apollo/react-testing';
import RepositoriesListQuery from '../../gql/queries/RepositoriesListQuery.gql';
import RepositoryListSetup from './testUtils/RepositoryListSetup';
import appKeyUserState from '../../store/user/testUtils/AppKeyUserState';
import { UserState } from '../../store/user';
import { LoginUserData } from '../../components/forms/LoginForm/types';
import { act } from '@testing-library/react';
const gitLogin = 'myGitLogin';

const repositoryListResponse = {
    createdAt: new Date().toISOString(),
    description: 'Some Repo',
    id: 'abc123',
    isFork: false,
    isPrivate: false,
    isTracked: false,
    name: 'myTestRepo',
    owner: {
        avatarUrl: null,
        id: 'abc123',
        login: gitLogin,
        url: 'http://somewhere.com',
    },
    url: 'http://something.com',
    updatedAt: new Date().toISOString(),
};

const user: UserState = {
    ...appKeyUserState,
    user: {
        ...(appKeyUserState.user as LoginUserData),
        gitLogin,
    },
};

describe('RepositoryList', () => {
    describe('Refreshing the repositories list and invoking the GQL API', () => {
        it('Runs on load', async () => {
            let invokedCount = 0;
            const mocks: MockedResponse[] = [
                {
                    request: {
                        query: RepositoriesListQuery,
                        variables: {
                            username: gitLogin,
                        },
                    },
                    result: () => {
                        invokedCount++;
                        return {
                            data: {
                                repositoryList: [repositoryListResponse],
                            },
                        };
                    },
                },
            ];

            const { getByTestId, findByTestId } = RepositoryListSetup(
                user,
                mocks,
            );

            await act(async () => {
                await wait(0);
            });

            expect(invokedCount).toEqual(1);
        });
    });
});
