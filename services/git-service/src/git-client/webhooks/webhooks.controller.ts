import { WebhooksService } from './webhooks.service';
import { Controller, Post, Body, Headers, Param, Get } from '@nestjs/common';
import { GitHubWebhookEventTypes } from './parser/eventModels/EventType.types';

@Controller('webhook')
export class WebhooksController {
	constructor(private readonly webhooksService: WebhooksService) {}
	@Post('/:id')
	async webhookHandler(@Param('id') id: string, @Body() body, @Headers() headers) {
		const gitEventType = headers['x-github-event'] as GitHubWebhookEventTypes; // https://developer.github.com/webhooks/
		console.log(`
---------------------------------------------
    received ${gitEventType} ${body.action ? body.action : ''} webhook!
---------------------------------------------`);
		// const gitDelivery = headers['x-github-delivery'];
		console.log(
			`Webhook Controller: received ${gitEventType} webhook update for repository ${id} ${Date.now()}`,
		);

		// TODO: implement and use te parser in order to process the webhook payload
		const result = await this.webhooksService.storeEvent(id, gitEventType, body);

		// console.log('Webhook Controller: result from storage: ', result);
		return result;
	}

	@Get()
	public async getAllEvents() {
		console.log('Webhook Controller: getting all webhook events:');

		return await this.webhooksService.findAll();
	}
}
