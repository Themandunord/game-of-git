const CHECK_RUN_ACTION_CREATED = "created";
const CHECK_RUN_ACTION_COMPLETED = "completed";
const CHECK_RUN_ACTION_REREQUESTED = "rerequested";
const CHECK_RUN_ACTION_REQUESTED_ACTION = "requested_action";

const CHECK_RUN_ACTION: { [key: string]: CheckRunActionTypes } = {
  CREATED: CHECK_RUN_ACTION_CREATED,
  COMPLETED: CHECK_RUN_ACTION_COMPLETED,
  REREQUESTED: CHECK_RUN_ACTION_REREQUESTED,
  REQUESTED_ACTION: CHECK_RUN_ACTION_REQUESTED_ACTION
};

/**
 * Supported action types as per GitHub's docs
 */
export type CheckRunActionTypes =
  | "created"
  | "completed"
  | "rerequested"
  | "requested_action";

const CHECK_RUN_STATUS_QUEUED = "queued";
const CHECK_RUN_STATUS_IN_PROGRESS = "in_progress";
const CHECK_RUN_STATUS_COMPLETED = "completed";

const CHECK_RUN_STATUS: { [key: string]: CheckRunStatusTypes } = {
  QUEUED: CHECK_RUN_STATUS_QUEUED,
  IN_PROGRESS: CHECK_RUN_STATUS_IN_PROGRESS,
  COMPLETED: CHECK_RUN_STATUS_COMPLETED
};

/**
 * Supported Status that a Check Run can be in
 */
export type CheckRunStatusTypes = "queued" | "in_progress" | "completed";

const CHECK_RUN_CONCLUSION_SUCCESS = "success";
const CHECK_RUN_CONCLUSION_FAILURE = "failure";
const CHECK_RUN_CONCLUSION_CANCELLED = "cancelled";
const CHECK_RUN_CONCLUSION_TIMED_OUT = "timed_out";
const CHECK_RUN_CONCLUSION_ACTION_REQUIRED = "action_required";

const CHECK_RUN_CONCLUSION: { [key: string]: CheckRunConclusionTypes } = {
  SUCCESS: CHECK_RUN_CONCLUSION_SUCCESS,
  FAILURE: CHECK_RUN_CONCLUSION_FAILURE,
  CANCELLED: CHECK_RUN_CONCLUSION_CANCELLED,
  TIMED_OUT: CHECK_RUN_CONCLUSION_TIMED_OUT,
  ACTION_REQUIRED: CHECK_RUN_CONCLUSION_ACTION_REQUIRED
};

/**
 * Supported Check Run Conclusion values
 */
export type CheckRunConclusionTypes =
  | "success"
  | "failure"
  | "neutral"
  | "cancelled"
  | "timed_out"
  | "action_required";

export const CHECK_RUN = {
  ACTION: CHECK_RUN_ACTION,
  STATUS: CHECK_RUN_STATUS,
  CONCLUSION: CHECK_RUN_CONCLUSION
};
