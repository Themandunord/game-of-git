import { PrismaService } from '../../prisma/prisma.service';
import { WebhooksRepository } from '../../git/client/webhooks/webhooks.repository';

export const clearWebhookEvent = async (
    prisma: PrismaService,
    webhooksRepository: WebhooksRepository,
    id: string
) => {
    //dynamo data
    await webhooksRepository.deleteEvent;
    return await prisma.client.deleteGitHubWebhookEvent({ id });
};
