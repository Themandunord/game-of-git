import { RepositoryProviders } from '@game-of-git/common';
import { RepositoryTestConfig } from '../../../../../testUtils/repositoryTestConfig';
import { SampleRepositoryClient } from './SampleRepositoryClient';

const SampleRepositoryTestConfig: RepositoryTestConfig = {
    name: RepositoryProviders.Sample,
    client: SampleRepositoryClient,
    entities: {
        ApiKey: {
            invalidScenarios: [
                {
                    it: 'Returns false when app key is false',
                    val: 'false'
                }
            ],
            validScenarios: [
                {
                    it: 'Returns true when the app key is true',
                    val: 'true'
                },
                {
                    it: 'Returns true when the app key is any string',
                    val: 'asdfjas;lkdjflaskjdf'
                }
            ]
        },
        Repository: {
            search: {
                invalidScenarios: [
                    // {
                    //     it: 'Returns false when app key is false',
                    //     val: 'false'
                    // }
                ],
                validScenarios: [
                    // {
                    //     it: 'Returns true when the app key is true',
                    //     val: 'true'
                    // },
                    // {
                    //     it: 'Returns true when the app key is any string',
                    //     val: 'asdfjas;lkdjflaskjdf'
                    // }
                ]
            },
            getBy: {}
        }
    }
};

export default SampleRepositoryTestConfig;
