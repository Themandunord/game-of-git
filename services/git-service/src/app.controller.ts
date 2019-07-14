import { Controller, Get } from '@nestjs/common';
import { ALogger } from '../../common/utilities/ALogger';
import { AppService } from './app.service';

@Controller()
export class AppController extends ALogger {
	constructor(private readonly appService: AppService) {
		super();
	}

	@Get()
	getHello(): string {
		return this.appService.getHello();
	}

	//   @UseGuards(AuthGuard())
	//   @Get('test')
	//   findAll() {
	//     this.l('test');

	//     return [];
	//   }
}
