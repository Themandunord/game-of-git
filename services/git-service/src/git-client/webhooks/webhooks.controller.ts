import { Controller, Post, Body, Headers, Param } from '@nestjs/common';

@Controller('webhook')
export class WebhooksController {
  @Post('/:id')
  async webhookHandler(@Param('id') id: string, @Body() body, @Headers() headers) {
    console.log(`
---------------------------------------------
    received webhook!
---------------------------------------------`);
    const gitEventType = headers['x-github-event']; // https://developer.github.com/webhooks/
    // const gitDelivery = headers['x-github-delivery'];
    console.log('webhook update for repository id ' + id);
    console.log(`EVENT TYPE: ${gitEventType}`);
    console.log('------------------------------------------------------------');
    console.log(body);
    console.log(`
------------------------------------------------------------
------------------------------------------------------------`);

    // TODO: implement and use te parser in order to process the webhook payload
  }
}
