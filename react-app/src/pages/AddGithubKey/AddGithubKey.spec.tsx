import React from 'react';
import AddGithubKeySetup from './testUtils/AddGithubKeySetup';
import noAppKeyUserState from '../../store/user/testUtils/NoAppKeyUserState';
import { act } from '@testing-library/react';
import { PATH } from '../../router/routes';

const ADD_GITHUB_KEY_FORM = 'add-github-key-form' as const;

jest.mock(`../../components/forms/AddGithubKeyForm/AddGithubKeyForm`, () => {
    return () => {
        return <div data-testid={'add-github-key-form'}></div>;
    };
});

describe('AddGitHubKey', () => {
    it('Renders the AddGithubKeyForm', async () => {
        const { getByTestId } = AddGithubKeySetup(noAppKeyUserState);

        const addGithubKeyForm = await getByTestId(ADD_GITHUB_KEY_FORM);
        expect(addGithubKeyForm).toBeDefined();
    });

    it('Redirects to the Dashboard if the user state has app keys', async () => {
        const { getByTestId, history } = AddGithubKeySetup(noAppKeyUserState);

        const addGithubKeyForm = await getByTestId(ADD_GITHUB_KEY_FORM);
        expect(addGithubKeyForm).toBeDefined();

        // update user state to have app keys
        act(() => {
            const setAppKeysButton = getByTestId('set-app-keys');
            setAppKeysButton.click();
        });

        expect(history.location.pathname).toEqual(PATH.DASHBOARD.path);
    });
});
