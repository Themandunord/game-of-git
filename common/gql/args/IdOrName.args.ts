import { IsNotEmpty, ValidateIf } from 'class-validator';
import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
export class IdOrNameArgs {
    @Field(type => ID, { nullable: true })
    @IsNotEmpty()
    @ValidateIf(o => o.name == undefined)
    id?: string;

    @Field(type => String, { nullable: true })
    @IsNotEmpty()
    @ValidateIf(o => o.id == undefined)
    name?: string;
}
