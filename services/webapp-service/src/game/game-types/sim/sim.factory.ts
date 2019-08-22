import Phaser from 'phaser';
import { AGameFactory } from '../../factory/AGameFactory.interface';
import { IGameConfig } from '../../IGame.interface';
import { phaserConfig } from './../default.config';

class SimGameFactory extends AGameFactory {
	public build(gameConfig: IGameConfig) {
		console.log('sim factory');

		return new Phaser.Game({ ...phaserConfig, ...gameConfig.phaser });
	}
}

export default new SimGameFactory();
