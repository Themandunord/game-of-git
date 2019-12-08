import { Field, ArgsType, ID } from 'type-graphql';
import { IsNotEmpty, ValidateIf, IsEmail } from 'class-validator';

@ArgsType()
export class AppKeyIdOrKeyArgs {
    @Field(type => ID, { nullable: true })
    @IsNotEmpty()
    @ValidateIf(o => o.key == undefined)
    id?: string;

    @Field(type => String, { nullable: true })
    @IsNotEmpty()
    @ValidateIf(o => o.id == undefined)
    key?: string;
}
