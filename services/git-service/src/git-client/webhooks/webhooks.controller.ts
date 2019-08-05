import { WebhooksService } from './webhooks.service';
import {
	Controller,
	Post,
	Body,
	Headers,
	Param,
	Get,
	NotFoundException,
	Logger
} from '@nestjs/common';
import { GitHubWebhookEventType } from './parser/eventModels/EventType.types';
import { GitHubWebhookEvents } from './parser/eventModels/EventType.constants';

@Controller('webhook')
export class WebhooksController {
	private readonly logger = new Logger('WebhooksController');
	constructor(private readonly webhooksService: WebhooksService) {}
	@Post('/:id')
	async webhookHandler(@Param('id') id: string, @Body() body, @Headers() headers) {
		// https://developer.github.com/webhooks/

		const gitEventType = headers['x-github-event'] as GitHubWebhookEventType;
		// const gitDelivery = headers['x-github-delivery'];

		this.logger.log(`
---------------------------------------------
    received ${gitEventType} ${body.action ? body.action : ''} webhook!
---------------------------------------------`);
		this.logger.log(
			`Webhook Controller: received ${gitEventType} webhook update for repository ${id} ${Date.now()}`
		);

		if (!this.eventTypeIsValid(gitEventType)) {
			this.logger.error('Returning NotFoundException');

			throw new NotFoundException(`Event Type ${gitEventType} was not found/supported`);
		}

		const result = await this.webhooksService.handleEvent(id, gitEventType, body);

		return result;
	}

	@Get()
	public async getAllEvents() {
		this.logger.log('Webhook Controller: getting all webhook events:');

		return await this.webhooksService.findAllInMongo();
	}

	private eventTypeIsValid(eventType: string): boolean {
		return (
			Object.keys(GitHubWebhookEvents).find(val => GitHubWebhookEvents[val] === eventType) !=
			null
		);
	}
}
