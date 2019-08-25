import { GitHubUser } from './user';
import { Field, ObjectType } from 'type-graphql';
import { GitHubComment } from './comment';

@ObjectType()
export class GitHubIssue {
    @Field()
    id: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field()
    createdAtExternal: Date;

    @Field()
    updatedAtExternal: Date;

    @Field()
    lastEditedAt: Date;

    // @Field(type => Repository)
    // repository: Repository;

    @Field(type => [GitHubUser])
    assignees: GitHubUser[];

    @Field(type => GitHubUser)
    author: GitHubUser;

    @Field(type => [GitHubComment])
    comments: GitHubComment[];

    @Field()
    bodyText: string;

    @Field()
    closed: Date;

    @Field()
    locked: boolean;

    @Field()
    number: number;

    @Field()
    state: string;

    @Field()
    title: string;

    @Field()
    url: string;
}
