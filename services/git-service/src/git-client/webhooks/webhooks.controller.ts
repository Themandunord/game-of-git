import { Controller, Post, Body } from '@nestjs/common';

@Controller('webhook')
export class WebhooksController {

    @Post()
    async webhookHandler(@Body() body) {
        console.log('received webhook!', body);
    }

}
