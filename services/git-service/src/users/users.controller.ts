import { Controller, Get, Param, Req } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

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
