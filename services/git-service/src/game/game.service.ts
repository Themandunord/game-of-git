import { Injectable, Logger } from '@nestjs/common';
import { GameType } from '../game-types/game-type.types';

@Injectable()
export class GameService {
	private logger = new Logger('GameService');
	public createGame(type: GameType, repositoryId: string) {
		this.logger.log(`create game in game service of type ${type} for repo ${repositoryId}`);

		// What happens in game creation?
		// TODO: Save the base config for the game
		// TODO: Add Listeners for Webhook Events concerning this Game's repository
		// TODO: Storing the delta of the game config for playback, debugging, etc.
		// TODO: Game Data storage (present world instance, rapid read/write)
		// TODO: Type-Specific Requirements (World Generation)
		// TODO: *Character Creator (DOWN THE LINE)
		return `Creating game of type ${type} for repository ${repositoryId}`;
	}
}
