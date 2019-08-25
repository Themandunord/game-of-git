const ISSUE_COMMENT_ACTION_CREATED = "created";
const ISSUE_COMMENT_ACTION_EDITED = "edited";
const ISSUE_COMMENT_ACTION_DELETED = "deleted";

const ISSUE_COMMENT_ACTION: { [key: string]: IssueCommentActionType } = {
  CREATED: ISSUE_COMMENT_ACTION_CREATED,
  EDITED: ISSUE_COMMENT_ACTION_EDITED,
  DELETED: ISSUE_COMMENT_ACTION_DELETED
};

export const ISSUE_COMMENT = {
  ACTION: ISSUE_COMMENT_ACTION
};

export type IssueCommentActionType = "created" | "edited" | "deleted";
