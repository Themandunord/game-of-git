import Phaser from 'phaser';
import { AGameFactory } from '../../factory/AGameFactory.interface';
import { IGameConfig } from '../../IGame.interface';
import { phaserConfig } from '../default.config';

export class RpgGameFactory extends AGameFactory {
	public build(gameConfig: IGameConfig) {
		return new Phaser.Game({ ...phaserConfig, ...gameConfig.phaser });
	}
}

export default new RpgGameFactory();
