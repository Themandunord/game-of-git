import { Field, ObjectType } from 'type-graphql';
import { User } from '../user/user';
import { ApiKey } from './api-key/api-key';
// import { Game } from './game';

@ObjectType()
export class Repository {
    @Field()
    id: string;

    @Field()
    idExternal: string;

    @Field()
    createdAt: Date;

    @Field()
    createdAtExternal: Date;

    @Field()
    updatedAt: Date;

    @Field()
    updatedAtExternal: Date;

    @Field(type => User)
    addedBy: User;

    @Field()
    name: string;

    @Field()
    description: string;

    @Field()
    homepageUrl: string;

    @Field()
    url: string;

    @Field()
    owner: string;

    @Field()
    isTracked: boolean;

    @Field(type => ApiKey)
    apiKey: ApiKey;

    @Field()
    isFork: boolean;

    @Field()
    isLocked: boolean;

    @Field()
    isPrivate: boolean;

    @Field()
    isDisabled: boolean;

    @Field()
    isArchived: boolean;

    @Field()
    sshUrl: string;

    // @Field(type => Game)
    // game: Game;
}
