import { Controller, Logger, Post, Body, Get, Param } from '@nestjs/common';

const logger = new Logger('GameController');

@Controller('game')
export class GameController {
	@Post('/create')
	async createGame(@Body('type') type: string) {
		logger.log(`Create Game ${type}!`);

		// What happens in game creation?
		// TODO: Save the base config for the game
		// TODO: Add Listeners for Webhook Events concerning this Game's repository
		// TODO: Storing the delta of the game config for playback, debugging, etc.
		// TODO: Game Data storage (present world instance, rapid read/write)
		// TODO: Type-Specific Requirements (World Generation)
		// TODO: *Character Creator (DOWN THE LINE)

		return type;
	}

	@Get(':id/load')
	async loadGame(@Param('id') id: string) {
		logger.log('load id game request ' + id);

		return id;
	}
}
