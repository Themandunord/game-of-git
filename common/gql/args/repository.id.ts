import { Field, ArgsType } from 'type-graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class RepositoryIdArgs {
    @Field(type => String)
    @IsNotEmpty()
    repositoryId: string;
}
