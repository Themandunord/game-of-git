const ISSUES_ACTION_OPENED = 'opened';
const ISSUES_ACTION_EDITED = 'edited';
const ISSUES_ACTION_DELETED = 'deleted';
const ISSUES_ACTION_TRANSFERRED = 'transferred';
const ISSUES_ACTION_PINNED = 'pinned';
const ISSUES_ACTION_UNPINNED = 'unpinned';
const ISSUES_ACTION_CLOSED = 'closed';
const ISSUES_ACTION_REOPENED = 'reopened';
const ISSUES_ACTION_ASSIGNED = 'assigned';
const ISSUES_ACTION_UNASSIGNED = 'unassigned';
const ISSUES_ACTION_LABELED = 'labeled';
const ISSUES_ACTION_UNLABELED = 'unlabeled';
const ISSUES_ACTION_LOCKED = 'locked';
const ISSUES_ACTION_UNLOCKED = 'unlocked';
const ISSUES_ACTION_MILESTONED = 'milestoned';
const ISSUES_ACTION_DEMILESTONED = 'demilestoned';

const ISSUES_ACTION: { [key: string]: IssuesActionType } = {
    OPENED: ISSUES_ACTION_OPENED,
    EDITED: ISSUES_ACTION_EDITED,
    DELETED: ISSUES_ACTION_DELETED,
    TRANSFERRED: ISSUES_ACTION_TRANSFERRED,
    PINNED: ISSUES_ACTION_PINNED,
    UNPINNED: ISSUES_ACTION_UNPINNED,
    CLOSED: ISSUES_ACTION_CLOSED,
    REOPENED: ISSUES_ACTION_REOPENED,
    ASSIGNED: ISSUES_ACTION_ASSIGNED,
    UNASSIGNED: ISSUES_ACTION_UNASSIGNED,
    LABELED: ISSUES_ACTION_LABELED,
    UNLABELED: ISSUES_ACTION_UNLABELED,
    LOCKED: ISSUES_ACTION_LOCKED,
    UNLOCKED: ISSUES_ACTION_UNLOCKED,
    MILESTONED: ISSUES_ACTION_MILESTONED,
    DEMILESTONED: ISSUES_ACTION_DEMILESTONED
};

export const ISSUES = {
    ACTION: ISSUES_ACTION
};

export type IssuesActionType =
    | 'opened'
    | 'edited'
    | 'deleted'
    | 'transferred'
    | 'pinned'
    | 'unpinned'
    | 'closed'
    | 'reopened'
    | 'assigned'
    | 'unassigned'
    | 'labeled'
    | 'unlabeled'
    | 'locked'
    | 'unlocked'
    | 'milestoned'
    | 'demilestoned';
