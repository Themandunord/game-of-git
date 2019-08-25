import { Field, ObjectType } from 'type-graphql';
import { Repository } from '../repository';
import { User } from '../user';
import { GitHubUser } from './user';
import { GitHubPullRequest } from './pull-request';

@ObjectType()
export class GitHubCommit {
    @Field()
    id: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field(type => GitHubUser)
    author: GitHubUser;

    @Field(type => GitHubPullRequest)
    associatedPullRequests: GitHubPullRequest[];

    @Field(type => GitHubUser)
    committer: GitHubUser;

    @Field()
    additions: number;

    @Field()
    authedDate: Date;

    @Field()
    changedFiles: number;

    @Field()
    commitUrl: string;

    @Field()
    deletions: number;

    @Field()
    message: string;

    @Field()
    messageHeadline: string;

    @Field()
    pushedDate: Date;

    @Field()
    treeUrl: string;

    @Field()
    url: string;
}
