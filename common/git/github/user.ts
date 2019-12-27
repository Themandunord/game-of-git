import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class GitHubUser {
    @Field()
    id: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field()
    createdAtExternal: Date;

    @Field()
    isBountyHunter: boolean;

    @Field()
    isCampusExpert: boolean;

    @Field()
    isDeveloperProgramMember: boolean;

    @Field()
    isEmployee: boolean;

    @Field()
    isHireable: boolean;

    @Field()
    isSiteAdmin: boolean;

    @Field()
    isViewer: boolean;

    @Field()
    url: string;

    @Field()
    name: string;

    @Field()
    login: string;

    @Field()
    avatarUrl: string;

    @Field()
    bio: string;

    @Field()
    company: string;

    @Field()
    email: string;
}
