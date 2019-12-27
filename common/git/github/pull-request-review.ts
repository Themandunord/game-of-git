import { Field, ObjectType } from 'type-graphql';
import { GitHubPullRequest } from './pull-request';
import { GitHubUser } from './user';

@ObjectType()
export class GitHubPullRequestReview {
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
    submittedAt: Date;

    @Field()
    lastEditeddAt: Date;

    @Field()
    publishedAt: Date;

    @Field(type => GitHubUser)
    author: GitHubUser;

    @Field(type => GitHubPullRequest)
    pullRequest: GitHubPullRequest;

    @Field()
    state: string;

    @Field()
    bodyText: string;

    @Field()
    url: string;
}
