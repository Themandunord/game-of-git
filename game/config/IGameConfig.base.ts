import { GameType } from "../game-types/game-type.types";

export interface IGameConfigBase {
  /**
   * Title of the Game, likely randomly generated?
   */
  title: string | null;

  /**
   * Owner of the Game
   */
  owner: string | null;

  /**
   * The Game Type
   */
  type: GameType | null;
}