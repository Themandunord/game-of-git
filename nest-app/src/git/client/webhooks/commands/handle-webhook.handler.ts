import { Logger } from '@nestjs/common';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { AGitHubEvent } from '../parser/eventModels/AGitHubEvent.abstract';
import { WebhooksRepository } from '../webhooks.repository';
import { HandleWebhookCommand } from './handle-webhook.command';

// tslint:disable:no-console

@CommandHandler(HandleWebhookCommand)
export class HandleWebhookHandler
    implements ICommandHandler<HandleWebhookCommand> {
    private readonly logger = new Logger('HandleWebhookHandler');
    constructor(
        private readonly eventPublisher: EventPublisher,
        private readonly webhooksRepository: WebhooksRepository
    ) {}

    async execute(command: HandleWebhookCommand) {
        this.logger.log(
            `Executing Handler HandleWebhookCommandHandler for webhook id ${command.webhookId}`
        );

        const webhook: AGitHubEvent = this.eventPublisher.mergeObjectContext(
            await this.webhooksRepository.loadEvent(command.webhookId)
        );

        webhook.beginProcessing();

        if (webhook.events.length > 0) {
            this.logger.log(
                `handling events, there are ${webhook.events.length}`
            );
            webhook.events.map(func => webhook.apply(func(command)));
        }

        webhook.completeProcessing();
    }
}
