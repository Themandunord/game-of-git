import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { HandleWebhookCommand } from './handle-webhook.command';

// tslint:disable:no-console

@CommandHandler(HandleWebhookCommand)
export class HandleWebhookHandler implements ICommandHandler<HandleWebhookCommand> {
	constructor(private readonly eventPublisher: EventPublisher) {}

	async execute(command: HandleWebhookCommand) {
		console.log(
			`Executing Handler HandleWebhookCommandHandler for webhook id ${command.webhookId}`
		);
	}
}
