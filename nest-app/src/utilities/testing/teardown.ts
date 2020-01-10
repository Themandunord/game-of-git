import { clearUserRepositories } from './git.repository.prisma';
import { PrismaService } from '../../prisma/prisma.service';
import { UserIdOrEmailArgs } from '@game-of-git/common';
import { clearUserAppKeys } from './git.app-key.prisma';
import { clearUser } from './user.prisma';
// import { clearWebhookEvents } from './git.webhook-event.prisma.dynamo';

interface ClearTestData {
    user: UserIdOrEmailArgs;
}

export const clearTestData = async (prisma: PrismaService, testData: any) => {
    const user = testData.user;
    // await clearWebhookEvents(prisma, user);
    await clearUserRepositories(prisma, user);
    await clearUserAppKeys(prisma, user);
    await clearUser(prisma, user);
};
