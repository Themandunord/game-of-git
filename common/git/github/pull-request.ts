import { Field, ObjectType } from 'type-graphql';
import { GitHubUser } from './user';

@ObjectType()
export class GitHubPullRequest {
    @Field()
    id: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field()
    createdAtExternal: Date;

    @Field()
    publishedAt: Date;

    @Field()
    closedAt: Date;

    @Field()
    mergedAt: Date;

    @Field(type => GitHubUser)
    author: GitHubUser;

    @Field(type => GitHubUser)
    mergedBy: GitHubUser;

    @Field()
    number: number;

    @Field()
    closed: boolean;

    @Field()
    isCrossRepository: boolean;

    @Field()
    locked: boolean;

    @Field()
    merged: boolean;

    @Field()
    additions: number;

    @Field()
    deletions: number;

    @Field()
    bodyText: number;
}
