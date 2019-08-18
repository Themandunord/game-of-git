import { IGameConfig } from './../IGame.interface';

export abstract class AGameFactory {
	public abstract build(gameConfig: IGameConfig): any;
}
