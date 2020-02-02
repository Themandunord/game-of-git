import GetByTestId from '../../testUtils/getByTestId.type';

const immediatelyAssertLoggedInRouterIsNotRendered = (
    getByTestId: GetByTestId,
) => {
    expect(() => getByTestId('logged-in-router')).toThrow(
        'Unable to find an element by: [data-testid="logged-in-router"]',
    );
};

export default immediatelyAssertLoggedInRouterIsNotRendered;
