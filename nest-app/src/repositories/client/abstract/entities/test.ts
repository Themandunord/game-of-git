import ApiKeyTests from './ApiKey/tests';
import RepositoryTests from './Repository/tests';

const entityTests = repositoryClientConfig => {
    describe('Entities', () => {
        ApiKeyTests(repositoryClientConfig);
        RepositoryTests(repositoryClientConfig);
    });
};

export default entityTests;
