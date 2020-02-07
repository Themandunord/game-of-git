import PATH from '../routes';
import NotLoggedInRouterSetup from './testUtils/NotLoggedInRouterSetup';
import jestMockTestComponentFactory from '../../testUtils/jestMockFactory';

jestMockTestComponentFactory(jest.mock, '../../pages/Login/Login', 'login');

describe('NotLoggedInRouter', () => {
    describe('Will always redirect to the login path', () => {
        describe('For registered routes', () => {
            for (let [key, value] of Object.entries(PATH)) {
                it(`${key}: "${value.name}"@"${value.path}"`, async () => {
                    const { getByTestId } = NotLoggedInRouterSetup(value.path);
                    expect(() => getByTestId('login')).toBeDefined();
                });
            }
        });

        it('For unknown routes', () => {
            const { getByTestId } = NotLoggedInRouterSetup('somewhere-else');
            expect(() => getByTestId('login')).toBeDefined();
        });
    });
});
