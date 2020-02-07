import React from 'react';
import mockRepository from '../../fixtureUtils/mockData/mockRepository';
import mockUser from '../../fixtureUtils/mockData/mockUser';
import AddGithubKeyForm from './AddGithubKeyForm/AddGithubKeyForm';
import CreateGameForm from './CreateGameForm/CreateGameForm';
import LoginForm from './LoginForm/LoginForm';

export default {
    'Add GitHub Key': <AddGithubKeyForm />,
    Login: <LoginForm />,
    'Create Game': (
        <CreateGameForm repository={mockRepository} user={mockUser} />
    ),
};
