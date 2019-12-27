import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { InputType, Field, ID } from 'type-graphql';

@InputType()
export class GitHubWebhookEventInput {
    @Field(type => ID)
    @IsNotEmpty()
    repository!: string;

    @Field()
    @IsNotEmpty()
    eventType: string;

    @Field({ nullable: true })
    @Field()
    @IsNotEmpty()
    sender: string;
}
