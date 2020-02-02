import { Matcher, MatcherOptions } from '@testing-library/react';
import GetByTestId from '../../testUtils/getByTestId.type';
import immediatelyAssertLoggedInRouterIsNotRendered from './immediatelyAssertNotLoggedInRouterIsNotRendered';
import immediatelyAssertNotLoggedInRouterIsNotRendered from './immediatelyAssertNotLoggedInRouterIsNotRendered';

const immediatelyAssertNoRouterIsRendered = (getByTestId: GetByTestId) => {
    // ensure that immediately the logged in and not logged in routers are not yet rendered
    immediatelyAssertLoggedInRouterIsNotRendered(getByTestId);
    immediatelyAssertNotLoggedInRouterIsNotRendered(getByTestId);
};

export default immediatelyAssertNoRouterIsRendered;
