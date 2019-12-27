import { Field, ObjectType } from 'type-graphql';
import { GitHubUser } from './user';

@ObjectType()
export class GitHubComment {
    @Field()
    id: string;

    // @Field(type => Repository)
    // repository: Repository;

    @Field(type => GitHubUser)
    author: GitHubUser;

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
