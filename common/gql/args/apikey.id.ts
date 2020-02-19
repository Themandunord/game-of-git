import { Field, ArgsType, ID } from 'type-graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class ApiKeyIdArgs {
    @Field(type => ID)
    @IsNotEmpty()
    id: string;
}
