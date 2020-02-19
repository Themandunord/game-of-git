import { Field, ObjectType } from 'type-graphql';
import { User } from '../../user/user';
import 'reflect-metadata';
@ObjectType()
export class ApiKey {
    @Field()
    id: string;

    @Field(type => User)
    user: User;

    @Field()
    key: string;

    @Field()
    name: string;

    @Field()
    provider: string;
}
