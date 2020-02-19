import { Field, ArgsType } from 'type-graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class ApiKeyKeyArgs {
    @Field(type => String)
    @IsNotEmpty()
    apiKey: string;
}
