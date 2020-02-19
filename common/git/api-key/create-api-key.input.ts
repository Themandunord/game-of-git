import { IsIn, IsNotEmpty } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import {
    REPOSITORY_PROVIDERS,
    RepositoryProviderTypes
} from '../../repository/providers';

@InputType()
export class CreateApiKeyInput {
    @Field()
    @IsIn(REPOSITORY_PROVIDERS)
    provider: RepositoryProviderTypes;

    @Field()
    @IsNotEmpty()
    name: string;

    @Field()
    @IsNotEmpty()
    key: string;
}
