import { Field, ArgsType, ID } from 'type-graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class AppKeyIdArgs {
    @Field(type => ID)
    @IsNotEmpty()
    id: string;
}
