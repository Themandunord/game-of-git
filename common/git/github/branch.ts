import { Field, ObjectType } from 'type-graphql';
import { GitHubRepository } from './repository';

@ObjectType()
export class GitHubBranch {
    @Field()
    id: string;

    @Field(type => GitHubRepository)
    repository: GitHubRepository;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field()
    name: string;

    @Field()
    merged: boolean;
}
