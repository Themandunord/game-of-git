import { PrismaService } from '../../prisma/prisma.service';
import { PasswordService } from '../../auth/password.service';
import { Role, UserIdOrEmailArgs } from '@game-of-git/common';

export const TEST_USER_EMAIL = 'someTestEmail@gmail.com';
export const TEST_PASSWORD = 'testtesttest';
export const TEST_GIT_LOGIN = 'test';

export const createOrRetrieveUser = async (
    prisma: PrismaService,
    userData: any = {}
) => {
    const email = userData.email ? userData.email : TEST_USER_EMAIL;
    const existingUser = await prisma.client.user({ email });

    if (existingUser) {
        return {
            ...existingUser,
            appKeys: await prisma.client.user({ email }).keys()
        };
    }

    const passwordService = new PasswordService();

    const createUserData = {
        email,
        password: await passwordService.hashPassword(
            userData.password || TEST_PASSWORD
        ),
        gitLogin: userData.gitLogin || TEST_GIT_LOGIN,
        role: userData.role || Role.ADMIN,
        name: userData.name || null
    };

    const createdUser = await prisma.client.createUser(createUserData);

    return {
        ...createdUser,
        appKeys: []
    };
};

export const clearUser = async (
    prisma: PrismaService,
    userIdOrEmailArgs: UserIdOrEmailArgs
) => {
    console.log(userIdOrEmailArgs);
    return await prisma.client.deleteUser(userIdOrEmailArgs);
};
