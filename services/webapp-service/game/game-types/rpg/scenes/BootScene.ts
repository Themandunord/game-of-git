import { Scene } from "phaser";
import sky from "@/assets/sky.png";
import bomb from "@/assets/bomb.png";
import thudMp3 from "@/assets/thud.mp3";
import thudOgg from "@/assets/thud.ogg";
import knightIdle from "@/assets/Knight/noBKG_KnightIdle_strip.png";
// import knightIdle from '@/assets/Knight/noBKG_KnightJumpAndFall_strip.png';

export default class BootScene extends Scene {
  constructor() {
    super({ key: "BootScene" });
  }

  preload() {
    // tslint:disable:no-console
    console.log("Booting Rpg Game, Preloading");
    this.load.image("sky", sky);
    this.load.image("bomb", bomb);
    this.load.audio("thud", [thudMp3, thudOgg]);
    // this.load.spritesheet('knightIdle', knightIdle);
    this.load.spritesheet("knightIdle", knightIdle, {
      frameHeight: 64,
      frameWidth: 64,
      startFrame: 0,
      endFrame: 14
    });
  }

  create() {
    console.log(
      "Booting Rpg Game: Create. About to call scene.start on PlayScene."
    );
    this.scene.start("PlayScene");
  }
}
