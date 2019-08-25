import { AGameFactory } from "src/game-meta/factory/AGameFactory.interface";

export class SimFactory extends AGameFactory {
  public build(gameConfig: any) {
    throw new Error("Method not implemented.");
  }
}

const factory = new SimFactory();

export default factory;
