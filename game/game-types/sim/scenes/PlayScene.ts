import { IGameState } from "./../../../IGameState.interface";
import { Scene } from "phaser";
import { BehaviorSubject } from "rxjs";
import { throttleTime } from "rxjs/operators";

//TODO: Need to DI this if I don't want to split the "Game" lib's code between front end and back end inside the server/vue apps
// import GameStateModule from "../../../../services/webapp-service/src/store/aspects/game";

const VELOCITY: [number, number] = [200, 20];

const STORE_UPDATE_INTERVAL_MS = 1500;

const sceneUpdateObservable = new BehaviorSubject({ x: 0, y: 0 });

export default class PlayScene extends Scene {
  constructor(private readonly gameStateModule: IGameState) {
    super({ key: "PlayScene" });
  }

  private bomb!: Phaser.Physics.Arcade.Image;

  create() {
    this.add.image(400, 300, "sky");

    this.bomb = this.physics.add.image(400, 200, "bomb");
    this.bomb.setCollideWorldBounds(true);
    (this.bomb.body as any).onWorldBounds = true; // enable worldbounds collision event
    this.bomb.setBounce(1);
    this.bomb.setVelocity(...VELOCITY);

    this.sound.add("thud");
    this.physics.world.on("worldbounds", () => {
      this.sound.play("thud", { volume: 0.75 });
    });
    sceneUpdateObservable
      .pipe(throttleTime(STORE_UPDATE_INTERVAL_MS))
      .subscribe(val => {
        this.gameStateModule.setLocation(sceneUpdateObservable.getValue());
      });
  }

  update() {
    sceneUpdateObservable.next(this.bomb.getCenter());
  }
}
