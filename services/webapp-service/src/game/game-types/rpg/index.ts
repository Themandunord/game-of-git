import { GameType, TRpg } from '../game-type.types';
import { AGame } from '../../AGame.abstract';

export class RpgGame extends AGame<TRpg> {
	public type: TRpg = GameType.RPG;
}
