import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { HandleWebhookCommand } from './HandleWebhookCommand';
const fs = require('fs');

@CommandHandler(HandleWebhookCommand)
export class HandleWebhookHandler implements ICommandHandler<HandleWebhookCommand> {
	constructor() {}

	async execute(command: HandleWebhookCommand) {
		console.log('Executing Handler HandleWebhookCommandHandler');
	}

	public writeProof() {
		try {
			const data = fs.writeFileSync(__dirname + '/test.txt', 'hey');
			// file written successfully
		} catch (err) {
			console.error(err);
		}
	}
}
