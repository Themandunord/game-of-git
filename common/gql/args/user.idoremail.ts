import { Field, ArgsType, ID } from 'type-graphql';
import { IsNotEmpty, IsOptional, ValidateIf, IsEmail } from 'class-validator';

@ArgsType()
export class UserIdOrEmailArgs {
    @Field(type => ID, { nullable: true })
    @IsNotEmpty()
    @ValidateIf(o => o.email == undefined)
    id?: string;

    @Field(type => String, { nullable: true })
    @IsNotEmpty()
    @IsEmail()
    @ValidateIf(o => o.id == undefined)
    email?: string;
}
