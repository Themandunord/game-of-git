import { IsNotEmpty } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class TrackRepositoryInput {
    @Field()
    @IsNotEmpty()
    owner: string;

    @Field()
    @IsNotEmpty()
    repository: string;
}
