import { GameEngine } from './engine/GameEngine.types';
import { GameType } from '../game-types/game-type.types';

export interface IGame {
	engine?: GameEngine;
	type: GameType;
	state: any;
}
