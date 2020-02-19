import React from 'react';
import AddApiKeySetup from './testUtils/AddApiKeySetup';
import noApiKeyUserState from '../../store/user/testUtils/NoApiKeyUserState';
import { act } from '@testing-library/react';
import PATH from '../../router/routes';

const ADD_API_KEY_FORM = 'add-github-key-form' as const;

jest.mock(`../../components/forms/AddApiKeyForm/AddApiKeyForm`, () => {
    return () => {
        return <div data-testid={'add-github-key-form'}></div>;
    };
});

describe('AddApiKey', () => {
    it('Renders the AddApiKeyForm', async () => {
        const { getByTestId } = AddApiKeySetup(noApiKeyUserState);

        const AddApiKeyForm = await getByTestId(ADD_API_KEY_FORM);
        expect(AddApiKeyForm).toBeDefined();
    });

    it('Redirects to the Dashboard if the user state has app keys', async () => {
        const { getByTestId, history } = AddApiKeySetup(noApiKeyUserState);

        const AddApiKeyForm = await getByTestId(ADD_API_KEY_FORM);
        expect(AddApiKeyForm).toBeDefined();

        // update user state to have app keys
        act(() => {
            const setApiKeysButton = getByTestId('set-api-keys');
            setApiKeysButton.click();
        });

        expect(history.location.pathname).toEqual(PATH.DASHBOARD.path);
    });
});
