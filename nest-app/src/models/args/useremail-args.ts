import { Field, ArgsType } from 'type-graphql';
import { IsNotEmpty, IsEmail } from 'class-validator';

@ArgsType()
export class UserEmailArgs {
    @Field(type => String)
    @IsNotEmpty()
    @IsEmail()
    email: string;
}
