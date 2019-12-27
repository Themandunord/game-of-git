import { Field, ObjectType } from 'type-graphql';
@ObjectType()
export class GitHubFileDiff {
    @Field()
    id: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field()
    additions: number;

    @Field()
    deletions: number;

    @Field()
    filepath: string;
}
