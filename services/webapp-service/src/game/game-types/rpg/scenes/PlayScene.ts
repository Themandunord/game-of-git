import { Scene } from 'phaser';

const VELOCITY: [number, number] = [200, 20];

// const STORE_UPDATE_INTERVAL_MS = 1500;

// const sceneUpdateObservable = new BehaviorSubject({ x: 0, y: 0 });

export default class PlayScene extends Scene {
	constructor() {
		super({ key: 'PlayScene' });
	}

	private bomb!: Phaser.Physics.Arcade.Image;
	private bomb2!: Phaser.Physics.Arcade.Image;
	private bomb3!: Phaser.Physics.Arcade.Image;
	private bomb4!: Phaser.Physics.Arcade.Image;

	private knightIdle!: Phaser.Physics.Arcade.Sprite;

	create() {
		this.add.image(400, 300, 'sky');

		// this.bomb = this.physics.add.image(400, 200, 'bomb');
		// this.bomb2 = this.physics.add.image(100, 40, 'bomb');
		// this.bomb3 = this.physics.add.image(20, 40, 'bomb');
		// this.bomb4 = this.physics.add.image(140, 20, 'bomb');
		// this.startBomb(this.bomb);
		// this.startBomb(this.bomb2);
		// this.startBomb(this.bomb3);
		// this.startBomb(this.bomb4);
		// this.sound.add('thud');
		this.physics.world.on('worldbounds', () => {
			this.sound.play('thud', { volume: 0.75 });
		});

		this.knightIdle = this.physics.add.sprite(30, 1000, 'knightIdle', 5);
		this.knightIdle.setBounce(0);
		this.knightIdle.setCollideWorldBounds(true);
		this.anims.create({
			key: 'left',
			// frames: this.anims.generateFrameNumbers('knightIdle', { start: 6, end: 14 }),
			frames: this.anims.generateFrameNumbers('knightIdle', { start: 0, end: 14 }),
			frameRate: 10,
			repeat: -1
		});
		this.knightIdle.play('left');
		// console.log(knightAnim);
	}

	update() {
		// sceneUpdateObservable.next(this.bomb.getCenter());
		// console.log(this.knightIdle.frame);
	}

	private startBomb(bomb: Phaser.Physics.Arcade.Image) {
		bomb.setCollideWorldBounds(true);
		(bomb.body as any).onWorldBounds = true; // enable worldbounds collision event
		bomb.setBounce(1);
		bomb.setVelocity(...VELOCITY);
	}
}
