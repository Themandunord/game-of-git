import { Controller, Post, Body, Headers } from '@nestjs/common';

@Controller('webhook')
export class WebhooksController {

    @Post()
    async webhookHandler(@Body() body, @Headers() headers) {
        console.log('received webhook!');
        const gitEventType = headers['x-github-event']; // https://developer.github.com/webhooks/
        // const gitDelivery = headers['x-github-delivery'];
        const action = body.action || '';
        console.log(`EVENT TYPE: ${gitEventType}, ACTION: ${action}`);
        console.log('------------------------------------------------------------');
        console.log(body);
    }

}
