import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { AppKeyService } from './../app-key/app-key.service';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(
		private readonly usersService: UsersService,
		private readonly appKeyService: AppKeyService,
	) {}

	/**
	 * Retrieve all app users from the Users Service
	 * @todo implement meaningfully with parameters
	 * @todo test
	 */
	@Get()
	async findAll() {
		return await this.usersService.getAll();
	}

	/**
	 * Returns the User of the given User Id
	 * @param request
	 * @param id
	 */
	@Get(['whoami/:id', ':id/data'])
	async whoAmI(@Req() request, @Param('id') id) {
		return await this.usersService.getById(id);
	}
}
