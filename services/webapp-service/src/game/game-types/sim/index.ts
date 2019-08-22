import { GameType, TSim } from '../game-type.types';
import { AGame } from '../../AGame.abstract';

export class SimGame extends AGame<TSim> {
	public type: TSim = GameType.SIM;
}
