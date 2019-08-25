import { GameType } from '../game-type.types';
import { AGame } from '../../AGame.abstract';

export class SimGame extends AGame<GameType.Sim> {
	public type: GameType.Sim = GameType.Sim;
}
