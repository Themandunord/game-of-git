import { GameEngine } from "./config/engine/GameEngine.types";
import { GameType } from "./game-types/game-type.types";
import { IGame } from "./config/IGame.interface";

export abstract class AGame<T extends {}> implements IGame {
  public engine: GameEngine = GameEngine.Phaser;
  public type!: GameType;
  public state!: T;
}
