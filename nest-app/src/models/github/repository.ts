import { Field, ObjectType } from 'type-graphql';
import { GitHubUser } from './user';

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

    @Field()
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
}
