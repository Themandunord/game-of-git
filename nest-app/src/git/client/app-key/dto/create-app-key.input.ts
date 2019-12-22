import { User } from '../../../../models/user';
import { UserCreateOneWithoutKeysInput } from '../../../../generated/prisma-client/index';
import {
    IsEmail,
    IsNotEmpty,
    MinLength,
    IsString,
    ValidateIf,
    ValidateNested
} from 'class-validator';
import { InputType, Field } from 'type-graphql';
import { Type } from 'class-transformer/decorators';

@InputType()
class EmailOrId {
    @Field()
    @IsEmail()
    @ValidateIf(o => o.id == undefined)
    email: string;

    @Field()
    @IsString()
    @ValidateIf(o => o.email == undefined)
    id: string;
}

@InputType()
class Email {
    @Field()
    @IsEmail()
    email: string;
}

@InputType()
export class CreateAppKeyInput {
    // @Field(Field => Email)
    // @ValidateNested()
    // @Type(() => Email)
    // user: Email;

    @Field()
    @IsNotEmpty()
    @MinLength(8)
    key: string;

    @Field()
    @IsNotEmpty()
    name: string;
}
