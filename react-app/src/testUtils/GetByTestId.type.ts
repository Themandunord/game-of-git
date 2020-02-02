import { Matcher, MatcherOptions } from '@testing-library/react';

type GetByTestId = (
    text: Matcher,
    options?: MatcherOptions | undefined,
    waitForElementOptions?: unknown,
) => HTMLElement;

export default GetByTestId;
