
/**
 * Abstract definition of a Repository that could be implemented for Git, or any other repository
 */
export abstract class ARepository {

    /**
     * Repository Name
     * 
     * ex: `game-of-git`
     */
    name: string;

    /**
     * Repository type
     * 
     * ex: `GitHub`
     */
    type: string;
}