import { TGameEngine } from './AGame.abstract';
import { TGameType } from './game-types/game-type.types';

export interface IGame {
	engine?: TGameEngine;
	type: TGameType;
	state: any;
}

export interface IGameConfig {
	phaser: Phaser.Types.Core.GameConfig;
	base: IGame;
}
