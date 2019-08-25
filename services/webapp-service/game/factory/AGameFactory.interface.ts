import { IPhaserGameConfig } from "../config/IPhaserGameConfig.interface";

export abstract class AGameFactory {
  public abstract build(gameConfig: IPhaserGameConfig): any;
}
