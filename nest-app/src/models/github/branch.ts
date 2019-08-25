import { Field, ObjectType } from 'type-graphql';
import { Repository } from '../repository';

@ObjectType()
export class GitHubBranch {
    @Field()
    id: string;

    @Field(type => Repository)
    repository: Repository;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field()
    name: string;

    @Field()
    merged: boolean;
}
