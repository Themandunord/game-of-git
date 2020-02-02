export const setNavIsExpanded = () =>
    ({ type: 'SET_NAV_EXPANDED', expanded: true } as const);
export const setNavNotExpanded = () =>
    ({ type: 'SET_NAV_EXPANDED', expanded: false } as const);

export type NavActions = ReturnType<
    typeof setNavIsExpanded | typeof setNavNotExpanded
>;
