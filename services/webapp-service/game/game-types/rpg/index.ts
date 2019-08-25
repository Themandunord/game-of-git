import { GameType } from "../game-type.types";
import { AGame } from "../../AGame.abstract";

export class RpgGame extends AGame<GameType.Rpg> {
  public type: GameType.Rpg = GameType.Rpg;
}
