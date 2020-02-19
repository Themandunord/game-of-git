import { Field, ObjectType } from 'type-graphql';
import { User } from '../../user/user';

@ObjectType()
export class ApiKeyIsValid {
    @Field()
    valid: boolean;
}
