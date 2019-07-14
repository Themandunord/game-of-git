import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { ALogger } from '../../common/utilities/ALogger';

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
