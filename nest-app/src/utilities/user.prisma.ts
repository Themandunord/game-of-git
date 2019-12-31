import { PrismaService } from '../prisma/prisma.service';
import { PasswordService } from '../auth/password.service';
import { Role } from '@game-of-git/common';

export const TEST_USER_EMAIL = 'someTestEmail@gmail.com';
export const TEST_PASSWORD = 'testtesttest';
export const TEST_GIT_LOGIN = 'test';

export const createOrRetrieveUser = async (
    prisma: PrismaService,
    userData: any = {}
) => {
    const existingUser = await prisma.client.user({ email: TEST_USER_EMAIL });

    if (existingUser) {
        return {
            ...existingUser,
            appKeys: await prisma.client.user({ email: TEST_USER_EMAIL }).keys()
        };
    }

    const passwordService = new PasswordService();

    const createUserData = {
        email: userData.email || TEST_USER_EMAIL,
        password: await passwordService.hashPassword(
            userData.password || TEST_PASSWORD
        ),
        gitLogin: userData.gitLogin || TEST_GIT_LOGIN,
        role: userData.role || Role.ADMIN
    };

    const createdUser = await prisma.client.createUser(createUserData);

    return {
        ...createdUser,
        appKeys: []
    };
};
