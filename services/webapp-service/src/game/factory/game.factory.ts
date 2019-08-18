import { AGameFactory } from '../factory/AGameFactory.interface';
import { GameType } from '../game-types/game-type.types';
import RpgGameFactory from '../game-types/rpg/rpg.factory';
import SimGameFactory from '../game-types/sim/sim.factory';
import { IGameConfig } from './../IGame.interface';

const GAME_FACTORIES: { [key: string]: AGameFactory } = {
	[GameType.RPG]: RpgGameFactory,
	[GameType.SIM]: SimGameFactory
};

export default class GameFactory {
	public static build(gameConfig: IGameConfig) {
		if (!gameConfig) {
			throw new Error(`Missing game config`);
		}
		if (!gameConfig.base) {
			throw new Error(`Missing base on game config`);
		}
		if (!gameConfig.base.type) {
			throw new Error(`Missing type on game config base`);
		}

		const type = gameConfig.base.type;

		if (typeof GAME_FACTORIES[type] == null) {
			throw new Error(`Unrecognized Game Type`);
		}
		console.log(`Calling on the ${type} Factory's build call`);

		return GAME_FACTORIES[type].build(gameConfig);
	}
}
