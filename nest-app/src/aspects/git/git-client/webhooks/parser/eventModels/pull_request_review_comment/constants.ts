const PULL_REQUEST_REVIEW_COMMENT_CREATED = 'created';
const PULL_REQUEST_REVIEW_COMMENT_EDITED = 'edited';
const PULL_REQUEST_REVIEW_COMMENT_DELETED = 'deleted';

const PULL_REQUEST_REVIEW_COMMENT_ACTION: {
    [key: string]: PullRequestReviewCommentActionType;
} = {
    CREATED: PULL_REQUEST_REVIEW_COMMENT_CREATED,
    EDITED: PULL_REQUEST_REVIEW_COMMENT_EDITED,
    DELETED: PULL_REQUEST_REVIEW_COMMENT_DELETED
};

export const PULL_REQUEST_REVIEW_COMMENT = {
    ACTION: PULL_REQUEST_REVIEW_COMMENT_ACTION
};

export type PullRequestReviewCommentActionType =
    | 'created'
    | 'edited'
    | 'deleted';
