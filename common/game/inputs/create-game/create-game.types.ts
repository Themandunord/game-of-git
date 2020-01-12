import { GameType } from '../../game.types';

/**
 * Interface for creating a new game
 */
export interface NewGameInterface {
    /**
     * Game Type that the game will be
     */
    gameType: null | GameType;

    /**
     * GitHub Username that is the owner of the repository
     */
    owner: null | string;

    /**
     * Name of the repository
     */
    repository: null | string;
}
