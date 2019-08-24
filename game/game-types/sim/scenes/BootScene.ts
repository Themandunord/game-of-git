import { Scene } from "phaser";
// import sky from "@/assets/sky.png";
// import bomb from "@/assets/bomb.png";
// import thudMp3 from "@/assets/thud.mp3";
// import thudOgg from "@/assets/thud.ogg";

export default class BootScene extends Scene {
  constructor() {
    super({ key: "BootScene" });
  }

  preload() {
    console.log("Booting Sim Game, Preloading");
    // this.load.image("sky", sky);
    // this.load.image("bomb", bomb);
    // this.load.audio("thud", [thudMp3, thudOgg]);
  }

  create() {
    console.log(
      "Booting Sim Game: Create. About to call scene.start on PlayScene."
    );
    this.scene.start("PlayScene");
  }
}
