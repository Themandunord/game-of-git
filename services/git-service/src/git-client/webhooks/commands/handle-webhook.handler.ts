import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { HandleWebhookCommand } from './handle-webhook.command';

// tslint:disable:no-console

@CommandHandler(HandleWebhookCommand)
export class HandleWebhookHandler implements ICommandHandler<HandleWebhookCommand> {
	constructor() {}

	async execute(command: HandleWebhookCommand) {
		console.log('Executing Handler HandleWebhookCommandHandler');
	}
}
