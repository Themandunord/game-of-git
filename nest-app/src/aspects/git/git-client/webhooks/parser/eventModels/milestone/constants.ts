const MILESTONE_ACTION_CREATED = 'created';
const MILESTONE_ACTION_CLOSED = 'closed';
const MILESTONE_ACTION_OPENED = 'opened';
const MILESTONE_ACTION_EDITED = 'edited';
const MILESTONE_ACTION_DELETED = 'deleted';

const MILESTONE_ACTION: { [key: string]: MilestoneActionType } = {
    CREATED: MILESTONE_ACTION_CREATED,
    CLOSED: MILESTONE_ACTION_CLOSED,
    OPENED: MILESTONE_ACTION_OPENED,
    EDITED: MILESTONE_ACTION_EDITED,
    DELETED: MILESTONE_ACTION_DELETED
};

export const MILESTONE = {
    ACTION: MILESTONE_ACTION
};

export type MilestoneActionType =
    | 'created'
    | 'closed'
    | 'opened'
    | 'edited'
    | 'deleted';
