import { GameService } from './game.service';
import { Controller, Logger, Post, Body, Get, Param } from '@nestjs/common';
import { GameType } from './game-types';

@Controller('game')
export class GameController {
    private logger = new Logger('GameController');

    constructor(private readonly gameService: GameService) {}
    @Post('/create')
    async createGame(
        @Body('type') type: GameType,
        @Body('repositoryId') repositoryId: string
    ) {
        this.logger.log(
            `This is Create Game ${type} for repositoryId ${repositoryId}!`
        );

        const res = await this.gameService.createGame(type, repositoryId);
        this.logger.log(`res = ${res}`);

        return res;

        // return await this.gameService.createGame(type, repositoryId);
    }

    @Get(':id/load')
    async loadGame(@Param('id') id: string) {
        this.logger.log('load id game request ' + id);

        return id;
    }
}
