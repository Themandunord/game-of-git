import { Field, ArgsType } from 'type-graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class AppKeyKeyArgs {
    @Field(type => String)
    @IsNotEmpty()
    appKey: string;
}
