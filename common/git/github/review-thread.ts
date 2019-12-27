import { Field, ObjectType } from 'type-graphql';
import { GitHubPullRequest } from './pull-request';
import { GitHubRepository } from './repository';
import { GitHubUser } from './user';

@ObjectType()
export class GitHubReviewThread {
    @Field()
    id: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field(type => GitHubPullRequest)
    pullRequest: GitHubPullRequest;

    @Field(type => GitHubRepository)
    repository: GitHubRepository;

    @Field(type => GitHubUser)
    resolvedBy: GitHubUser;

    @Field()
    isResolved: boolean;
}
