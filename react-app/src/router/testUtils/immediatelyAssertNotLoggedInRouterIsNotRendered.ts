import GetByTestId from '../../testUtils/getByTestId.type';

const immediatelyAssertNotLoggedInRouterIsNotRendered = (
    getByTestId: GetByTestId,
) => {
    expect(() => getByTestId('not-logged-in-router')).toThrow(
        'Unable to find an element by: [data-testid="not-logged-in-router"]',
    );
};

export default immediatelyAssertNotLoggedInRouterIsNotRendered;
