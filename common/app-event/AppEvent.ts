import { Field, ObjectType, registerEnumType, InputType } from 'type-graphql';

@ObjectType()
export class AppEvent {
    @Field()
    type: string;

    @Field()
    data: string;
}
