const BASE_CONFIG = {
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
		type: null,
		state: {}
	}
};

export default BASE_CONFIG;
