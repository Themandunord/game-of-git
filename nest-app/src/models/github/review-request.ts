import { Field, ObjectType } from 'type-graphql';
import { GitHubPullRequest } from './pull-request';
import { GitHubUser } from './user';

@ObjectType()
export class GitHubReviewRequest {
    @Field()
    id: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field(type => GitHubPullRequest)
    pullRequest: GitHubPullRequest;

    @Field(type => GitHubUser)
    requestedReviewer: GitHubUser;
}
