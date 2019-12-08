import { Field, ObjectType } from 'type-graphql';
import { User } from '../user';

@ObjectType()
export class GitHubComment {
    @Field()
    id: string;

    // @Field(type => Repository)
    // repository: Repository;

    @Field(type => User)
    author: User;

    @Field()
    createdAt: Date;

    @Field()
    createdAtExternal: Date;

    @Field()
    updatedAt: Date;

    @Field()
    bodyText: string;

    @Field()
    url: string;
}
