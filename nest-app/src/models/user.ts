import { Field, ObjectType, registerEnumType, InputType } from 'type-graphql';
import { Post } from './post';

@ObjectType()
export class User {
    @Field()
    id: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field()
    email: string;

    @Field({ nullable: true })
    name?: string;

    @Field(type => Role)
    role: Role;

    @Field(type => [Post])
    posts: Post[];

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
