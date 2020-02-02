import React from 'react';

/**
 *
 * @param jestMock
 * @param path
 * @param testId
 */
const jestMockTestComponentFactory = (
    jestMock: (
        moduleName: string,
        factory?: (() => unknown) | undefined,
        options?: jest.MockOptions | undefined,
    ) => unknown,
    path: string,
    testId: string,
) => {
    jestMock(path, () => {
        return function() {
            return <div data-testid={testId}></div>;
        };
    });
};

export default jestMockTestComponentFactory;
