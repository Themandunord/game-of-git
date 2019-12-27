import { Field, ArgsType } from 'type-graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class UsernameArgs {
    @Field(type => String)
    @IsNotEmpty()
    username: string;
}
