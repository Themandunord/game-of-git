import initializeClientFromConfig from '../../../../../../testUtils/initializeClientFromConfig';
import { RepositoryClient } from '../../RepositoryClient.abstract';

const RepositoryTests = repositoryClientConfig => {
    describe('Repository Tests', () => {
        let client: RepositoryClient;
        const { Repository } = repositoryClientConfig.entities;

        beforeAll(() => {
            client = initializeClientFromConfig(repositoryClientConfig);
        });

        describe('search', () => {
            const search = Repository.search;
            describe('invalid params', () => {
                it('stubs', () => {
                    expect(true).toBeTruthy();
                });
            });
            describe('valid scenarios', () => {
                it('stubs', () => {
                    expect(true).toBeTruthy();
                });
            });
        });
        describe('getBy', () => {
            const getBy = Repository.getBy;

            describe('invalid params', () => {
                it('stubs', () => {
                    expect(true).toBeTruthy();
                });
            });
            describe('valid scenarios', () => {
                it('stubs', () => {
                    expect(true).toBeTruthy();
                });
            });
        });
    });
};

export default RepositoryTests;
