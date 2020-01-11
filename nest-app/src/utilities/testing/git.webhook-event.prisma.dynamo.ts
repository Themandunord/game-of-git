import { PrismaService } from '../../prisma/prisma.service';
import { WebhooksRepository } from '../../git/client/webhooks/webhooks.repository';
import { UserIdOrEmailArgs } from '@game-of-git/common';

// export const clearWebhookEvent = async (
//     // prisma: PrismaService,
//     webhooksRepository: WebhooksRepository,
//     id: string
// ) => {
//     //dynamo data
//     return await webhooksRepository.deleteEvent(id);
//     // return await prisma.client.deleteGitHubWebhookEvent({ id });
// };

export const clearWebhookEvents = async (
    webhooksRepository: WebhooksRepository,
    userIdOrEmailArgs: UserIdOrEmailArgs
) => {
    return await webhooksRepository.deleteUsersRepositoriesEvents(
        userIdOrEmailArgs
    );
};
