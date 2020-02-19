import { Field, ObjectType } from 'type-graphql';
import { User } from '../../user/user';
import { ApiKey } from '../api-key/api-key';
import { Repository } from '../repository';

@ObjectType()
export class GitHubWebhookEvent {
    @Field()
    id: string;

    @Field()
    createdAt: Date;

    @Field(type => Repository)
    repository: Repository;

    // TODO: ENUM
    @Field()
    eventType: string;

    // TODO: ENUM
    @Field()
    action: string;

    // TODO: User relation
    @Field()
    sender: string;
}
