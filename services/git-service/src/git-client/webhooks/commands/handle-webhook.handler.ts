import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { HandleWebhookCommand } from './handle-webhook.command';
import { Logger } from '@nestjs/common';

// tslint:disable:no-console

@CommandHandler(HandleWebhookCommand)
export class HandleWebhookHandler implements ICommandHandler<HandleWebhookCommand> {
	private readonly logger = new Logger('HandleWebhookHandler');
	constructor(private readonly eventPublisher: EventPublisher) {}

	async execute(command: HandleWebhookCommand) {
		this.logger.log(
			`Executing Handler HandleWebhookCommandHandler for webhook id ${command.webhookId}`
		);
	}
}
