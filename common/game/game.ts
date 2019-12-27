import { Field, ObjectType } from 'type-graphql';
import { Repository } from '../git/repository';
import { User } from '../user';

@ObjectType()
export class Game {
    @Field()
    id: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field(type => Repository)
    repository: Repository;

    @Field()
    title: string;

    @Field(type => User)
    owner: User;

    // TODO: ENUM
    @Field()
    type: string;
}
