import { Field, ObjectType } from 'type-graphql';
import { User } from './user';

@ObjectType()
export class AppKey {
    @Field()
    id: string;

    // @Field()
    // createdAt: Date;

    // @Field()
    // updatedAt: Date;

    @Field(type => User)
    user: User;

    @Field()
    key: string;

    @Field()
    name: string;
}
