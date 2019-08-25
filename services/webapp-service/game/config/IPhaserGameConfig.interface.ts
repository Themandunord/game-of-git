import { IGame } from "./IGame.interface";

/**
 * Configuration for a game using Phaser
 */
export interface IPhaserGameConfig {
  phaser: Phaser.Types.Core.GameConfig;
  base: IGame; //
}
