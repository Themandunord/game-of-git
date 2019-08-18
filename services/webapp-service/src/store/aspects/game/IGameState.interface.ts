import { IGameConfigBase } from './IGameConfig.base';
export interface IGameState {
	gameConfig: IGameConfigBase;

	currentLocation: { x: any; y: any; z: any };
}
