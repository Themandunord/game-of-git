import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class GitHubLabel {
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
    color: string;

    @Field()
    description: string;

    @Field()
    name: string;

    @Field()
    url: string;
}
