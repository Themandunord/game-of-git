import Phaser from "phaser";
import { AGameFactory } from "../../factory/AGameFactory.interface";
import { IPhaserGameConfig } from "../../config/IPhaserGameConfig.interface";
import BASE_PHASER_GAME_CONFIG from "../../config/BasePhaserGameConfig";

export class RpgGameFactory extends AGameFactory {
  public build(gameConfig: IPhaserGameConfig) {
    return new Phaser.Game({
      ...BASE_PHASER_GAME_CONFIG,
      ...gameConfig.phaser
    });
  }
}

export default new RpgGameFactory();
