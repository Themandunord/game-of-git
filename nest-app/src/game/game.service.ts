import { GameType, CreateGameInput, User } from '@game-of-git/common';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class GameService {
    private logger = new Logger('GameService');

    constructor() // private readonly repositoriesService: RepositoriesService
    {}
    public async createGame(user: User, createGameInput: CreateGameInput) {
        this.logger.log(
            `create game in game service of type ${createGameInput.gameType} for ${createGameInput.owner}'s repo ${createGameInput.repository}`
        );

        // Start Tracking the Repository
        // const repository = await this.repositoriesService.trackRepository(
        //     user,
        //     {
        //         owner: createGameInput.owner,
        //         repository: createGameInput.repository
        //     }
        // );

        // this.logger.log(
        //     `Tracking repository ${repository.name}   (${repository.id})`
        // );
        throw new Error('Not implemented yet');
        // Save Game & Config
        // let game = await this.prisma.client
        //     .repository({ id: repository.id })
        //     .game();

        // if (!game) {
        //     this.logger.log(
        //         'Game did not exist for repository, creating new one.'
        //     );
        //     game = await this.prisma.client.createGame({
        //         owner: {
        //             connect: {
        //                 email: user.email
        //             }
        //         },
        //         repository: {
        //             connect: {
        //                 id: repository.id
        //             }
        //         },
        //         title: 'Some Game',
        //         type: createGameInput.gameType
        //     });
        // }

        // TODO: How to track Game Delta?

        // TODO: Storing the delta of the game config for playback, debugging, etc.
        // TODO: Game Data storage (present world instance, rapid read/write)
        // TODO: Type-Specific Requirements (World Generation)
        // TODO: *Character Creator (DOWN THE LINE)

        // ***** EPIC ***** Initialize Repository Scrape
        // Scrapes the repository for its entire history, then builds up a knowledge base of the repository to generate the game from.
        console.log(
            `Creating game of type ${createGameInput.gameType} for repository ${createGameInput.repository}`
        );

        // return game;
    }

    public async endGame(user: User, gameId: string) {
        this.logger.log(`end game in game service ${gameId}`);
        throw new Error('Not implemented yet');
        // const repository = await this.prisma.client
        //     .game({ id: gameId })
        //     .repository();

        // await this.repositoriesService.setRepositoryTracking(
        //     user,
        //     { id: repository.id },
        //     false
        // );

        // return await this.prisma.client.deleteGame({ id: gameId });
    }
}
