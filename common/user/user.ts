import { Field, ObjectType, registerEnumType } from 'type-graphql';
import { ApiKey } from '../git/api-key';

@ObjectType()
export class User {
    @Field()
    id: string;

    @Field()
    createdAt: string;

    @Field()
    updatedAt: string;

    @Field()
    email: string;

    @Field({ nullable: true })
    name?: string;

    @Field(type => Role)
    role: Role;

    @Field(type => [ApiKey])
    apiKeys: ApiKey[];

    @Field()
    password: string;

    @Field()
    gitLogin: string;
}

export enum Role {
    ADMIN = 'ADMIN',
    USER = 'USER'
}

registerEnumType(Role, {
    name: 'Role',
    description: 'User role'
});
