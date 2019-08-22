import { TGameType } from './game-types/game-type.types';
import { IGame } from './IGame.interface';

export type TPhaser = 'phaser';
export const PHASER = 'phaser' as TPhaser;

export type TGameEngine = TPhaser;
export const GameEngine = {
	PHASER
};

export abstract class AGame<T extends {}> implements IGame {
	public engine: TGameEngine = GameEngine.PHASER;
	public type!: TGameType;
	public state!: T;
}
