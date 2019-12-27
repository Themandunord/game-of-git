import { Field, ObjectType } from 'type-graphql';
import { GitHubUser } from './user';
import { GitHubIssue } from './issue';

@ObjectType()
export class GitHubRepository {
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

    @Field(type => GitHubUser)
    owner: GitHubUser;

    @Field()
    hasBranchRules: boolean;

    @Field()
    hasContributingGuidelines: boolean;

    @Field()
    hasPullRequestTemplate: boolean;

    @Field()
    hasReadMe: boolean;

    @Field()
    hasWiki: boolean;

    @Field()
    isArchived: boolean;

    @Field()
    isDisabled: boolean;

    @Field()
    isFork: boolean;

    @Field()
    isLocked: boolean;

    @Field()
    isPrivate: boolean;

    // Attempt at custom added field
    @Field()
    isTracked: boolean;

    @Field({
        nullable: true
    })
    description: string;

    @Field()
    license: string;

    @Field()
    name: string;

    @Field()
    primaryLanguage: string;

    @Field()
    sshUrl: string;

    @Field()
    url: string;

    // @Field(returns => [GitHubIssue])
    // issues: GitHubIssue[];
}
