import { Field, ArgsType } from 'type-graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class RepositoryListArgs {
    @Field(type => String)
    @IsNotEmpty()
    username: string;

    @Field(type => String)
    filter: string;
}
