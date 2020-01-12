import { IsEnum, IsNotEmpty, MinLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { GameType } from '../../game.types';
import { NewGameInterface } from './create-game.types';

@InputType()
export class CreateGameInput implements NewGameInterface {
    @Field()
    @IsEnum(GameType)
    gameType: GameType;

    @Field()
    @IsNotEmpty()
    @MinLength(1)
    owner: string;

    @Field()
    @IsNotEmpty()
    @MinLength(1)
    repository: string;
}
