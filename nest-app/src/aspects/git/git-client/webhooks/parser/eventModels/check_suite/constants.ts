const CHECK_SUITE_ACTION_COMPLETED = 'completed';
const CHECK_SUITE_ACTION_REQUESTED = 'requested';
const CHECK_SUITE_ACTION_REREQUESTED = 'rerequested';

const CHECK_SUITE_ACTION: { [key: string]: CheckSuiteActionType } = {
    COMPLETED: CHECK_SUITE_ACTION_COMPLETED,
    REQUESTED: CHECK_SUITE_ACTION_REQUESTED,
    REREQUESTED: CHECK_SUITE_ACTION_REREQUESTED
};

export type CheckSuiteActionType = 'completed' | 'requested' | 'rerequested';

const CHECK_SUITE_STATUS_REQUESTED = 'requested';
const CHECK_SUITE_STATUS_IN_PROGRESS = 'in_progress';
const CHECK_SUITE_STATUS_COMPLETED = 'completed';

const CHECK_SUITE_STATUS: { [key: string]: CheckSuiteStatusType } = {
    REQUESTED: CHECK_SUITE_STATUS_REQUESTED,
    IN_PROGRESS: CHECK_SUITE_STATUS_IN_PROGRESS,
    COMPLETED: CHECK_SUITE_STATUS_COMPLETED
};

export type CheckSuiteStatusType = 'requested' | 'in_progress' | 'completed';

const CHECK_SUITE_CONCLUSION_SUCCESS = 'success';
const CHECK_SUITE_CONCLUSION_FAILURE = 'failure';
const CHECK_SUITE_CONCLUSION_NEUTRAL = 'neutral';
const CHECK_SUITE_CONCLUSION_CANCELLED = 'cancelled';
const CHECK_SUITE_CONCLUSION_TIMED_OUT = 'timed_out';
const CHECK_SUITE_CONCLUSION_ACTION_REQUIRED = 'action_required';
const CHECK_SUITE_CONCLUSION_IN_PROGRESS = null;

const CHECK_SUITE_CONCLUSION: { [key: string]: CheckSuiteConclusionType } = {
    SUCCESS: CHECK_SUITE_CONCLUSION_SUCCESS,
    FAILURE: CHECK_SUITE_CONCLUSION_FAILURE,
    NEUTRAL: CHECK_SUITE_CONCLUSION_NEUTRAL,
    CANCELLED: CHECK_SUITE_CONCLUSION_CANCELLED,
    TIMED_OUT: CHECK_SUITE_CONCLUSION_TIMED_OUT,
    ACTION_REQUIRED: CHECK_SUITE_CONCLUSION_ACTION_REQUIRED,
    IN_PROGRESS: CHECK_SUITE_CONCLUSION_IN_PROGRESS
};

export const CHECK_SUITE = {
    ACTION: CHECK_SUITE_ACTION,
    STATUS: CHECK_SUITE_STATUS,
    CONCLUSION: CHECK_SUITE_CONCLUSION
};

export type CheckSuiteConclusionType =
    | 'success'
    | 'failure'
    | 'neutral'
    | 'cancelled'
    | 'timed_out'
    | 'action_required'
    | null;
