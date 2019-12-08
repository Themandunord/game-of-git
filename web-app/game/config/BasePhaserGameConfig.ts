import { GameType } from './../game-types/game-type.types';
import Phaser from 'phaser';
import { IPhaserGameConfig } from './IPhaserGameConfig.interface';

const BASE_PHASER_GAME_CONFIG: IPhaserGameConfig = {
	phaser: {
		type: Phaser.AUTO,
		width: 800,
		height: 600,
		parent: 'game-container',
		physics: {
			default: 'arcade',
			arcade: {
				gravity: { y: 300 },
				debug: false
			}
		},
		scene: []
	},
	base: {
		type: GameType.Rpg,
		state: {}
	}
};

export default BASE_PHASER_GAME_CONFIG;
