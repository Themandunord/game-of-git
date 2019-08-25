import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class GitHubTopic {
    @Field()
    id: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field()
    name: string;
}
