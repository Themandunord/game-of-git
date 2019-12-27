import { Field, ArgsType } from 'type-graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GameIdArgs {
    @Field(type => String)
    @IsNotEmpty()
    postId: string;
}
