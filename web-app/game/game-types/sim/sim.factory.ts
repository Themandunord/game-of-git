import { IPhaserGameConfig } from './../../config/IPhaserGameConfig.interface';
import Phaser from 'phaser';
import { AGameFactory } from '../../factory/AGameFactory.interface';
import PHASER_GAME_CONFIG_BASE from '../../config/BasePhaserGameConfig';

class SimGameFactory extends AGameFactory {
	public build(gameConfig: IPhaserGameConfig) {
		console.log('sim factory');

		return new Phaser.Game({
			...PHASER_GAME_CONFIG_BASE,
			...gameConfig.phaser
		});
	}
}

export default new SimGameFactory();
