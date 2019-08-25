import { IGameConfigBase } from './config/IGameConfig.base';

export interface IGameState {
	gameConfig: IGameConfigBase;

	// TODO: better return typing
	setGameConfig(config: IGameConfigBase): any;

	currentLocation: { x: any; y: any; z: any };

	// TODO: Better return typing
	setLocation(location: any): any;
}
