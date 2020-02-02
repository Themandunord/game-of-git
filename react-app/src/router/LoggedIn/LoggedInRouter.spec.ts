import appKeyUserState from '../../store/user/testUtils/AppKeyUserState';
import noAppKeyUserState from '../../store/user/testUtils/NoAppKeyUserState';
import jestMockTestComponentFactory from '../../testUtils/jestMockFactory';
import PATH from '../routes';
import LOGGED_IN_ROUTES from './LoggedInRoutes';
import LoggedInRouterSetup from './testUtils/LoggedInRouterSetup';

Object.entries(PATH).map(([key, value]) =>
    jestMockTestComponentFactory(
        jest.mock,
        `../../pages${value.page}`,
        value.name,
    ),
);

describe('LoggedInRouter', () => {
    describe('If the user does not have any app keys, they are redirected to the AddGithubKey page', () => {
        describe('For registered routes', () => {
            for (let [key, value] of Object.entries(PATH)) {
                it(`${key}: "${value.name}"@"${value.path}"`, async () => {
                    const { findByTestId } = LoggedInRouterSetup(
                        value,
                        noAppKeyUserState,
                    );
                    const addGithubKey = await findByTestId(
                        PATH.ADD_GITHUB_KEY.name,
                    );
                    expect(addGithubKey).toBeDefined();
                });
            }
        });

        it('For unknown routes', async () => {
            const { getByTestId } = LoggedInRouterSetup(
                {
                    path: 'something-that-doesnt-exist',
                },
                noAppKeyUserState,
            );
            const addGithubKey = await getByTestId(PATH.ADD_GITHUB_KEY.name);
            expect(addGithubKey).toBeDefined();
        });
    });

    describe('If the user has a registered app key, they do not get redirected and the requested route is rendered', () => {
        describe('For registered routes', () => {
            LOGGED_IN_ROUTES.map(route => {
                it(`${route.name}@"${route.path}"`, async () => {
                    const { getByTestId, findByTestId } = LoggedInRouterSetup(
                        route,
                        appKeyUserState,
                    );

                    // assert that the requested page component is rendered (these are mocks so we are ignoring their potential redirects)
                    const pageComponent = await findByTestId(route.name);
                    if (route.name !== PATH.ADD_GITHUB_KEY.name) {
                        // explicitly ensure that the route doesn't render for AddGithubKey
                        expect(() =>
                            getByTestId(PATH.ADD_GITHUB_KEY.name),
                        ).toThrow(
                            `Unable to find an element by: [data-testid="${PATH.ADD_GITHUB_KEY.name}"]`,
                        );
                    }
                });
            });
        });
        it('For unknown routes, NotFound is rendered', async () => {
            const { getByTestId, findByTestId } = LoggedInRouterSetup(
                {
                    path: 'something-unknown',
                },
                appKeyUserState,
            );

            const pageComponent = await findByTestId(PATH.NOT_FOUND.name);
            // explicitly ensure that the route doesn't render for AddGithubKey
            expect(() => getByTestId(PATH.ADD_GITHUB_KEY.name)).toThrow(
                `Unable to find an element by: [data-testid="${PATH.ADD_GITHUB_KEY.name}"]`,
            );
        });
    });
});
