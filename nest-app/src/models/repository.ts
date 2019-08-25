import { Field, ObjectType } from 'type-graphql';
import { User } from './user';
import { AppKey } from './app-key';
import { Game } from './game';

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

    @Field(type => AppKey)
    appKey: AppKey;

    @Field()
    isFork: boolean;

    @Field()
    isLocked: boolean;

    @Field()
    isPrivate: boolean;

    @Field()
    isDiabled: boolean;

    @Field()
    sshUrl: string;

    @Field(type => Game)
    game: Game;
}
