import { Controller, Get, HttpStatus } from '@nestjs/common';

@Controller()
export class AppController {
	@Get('/ping')
	private ping() {
		return '';
	}
}
