import { PrismaService } from '../../prisma/prisma.service';
import { UserIdOrEmailArgs, AppKeyIdOrKeyArgs } from '@game-of-git/common';
import { createOrRetrieveUser, TEST_USER_EMAIL } from './user.prisma';
import { AppKeyCreateInput } from '../../generated/prisma-client';

interface AppKeyData {
    key?: string;
    name?: string;
    user: UserIdOrEmailArgs;
}

export const createOrRetrieveAppKey = async (
    prisma: PrismaService,
    appKeyData: AppKeyData = {
        user: {
            email: TEST_USER_EMAIL
        }
    }
) => {
    // app keys belong to a user

    let key = 'asdfasdfasdf';

    if (appKeyData.key) {
        const existingAppKey = await prisma.client.appKey({
            key: appKeyData.key
        });
        if (existingAppKey) {
            return existingAppKey;
        }
        key = appKeyData.key;
    }

    const createAppKeyData: AppKeyCreateInput = {
        key,
        name: appKeyData.name || 'some app key',
        user: {
            connect: {
                ...appKeyData.user
            }
        }
    };
    const created = await prisma.client.createAppKey(createAppKeyData);

    return created;
};

export const clearAppKey = async (
    prisma: PrismaService,
    appKeyIdOrKeyArgs: AppKeyIdOrKeyArgs
) => {
    return await prisma.client.deleteAppKey(appKeyIdOrKeyArgs);
};

export const clearUserAppKeys = async (
    prisma: PrismaService,
    userIdOrEmailArgs: UserIdOrEmailArgs
) => {
    return await prisma.client.deleteManyAppKeys({ user: userIdOrEmailArgs });
};
