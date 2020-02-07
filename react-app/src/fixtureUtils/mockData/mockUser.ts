import { LoginUserData } from '../../components/forms/LoginForm/types';

const mockUser: LoginUserData = {
    appKeys: [
        {
            id: 'abc123',
        },
    ],
    createdAt: new Date().toISOString(),
    email: 'abc@gmail.com',
    gitLogin: 'my-github-user',
    id: 'abc123',
    name: 'some user',
    role: 'ADMIN',
    updatedAt: new Date().toISOString(),
};

export default mockUser;
