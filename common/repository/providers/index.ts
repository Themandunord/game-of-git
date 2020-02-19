import * as github from './github';
import * as sample from './sample';

export type RepositoryProviderTypes =
    | typeof sample.Sample
    | typeof github.GitHub;
export const REPOSITORY_PROVIDERS = [sample.Sample, github.GitHub];

export const RepositoryProviders = {
    ...github,
    ...sample
};
