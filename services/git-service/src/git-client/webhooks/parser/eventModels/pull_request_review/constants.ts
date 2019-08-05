const PULL_REQUEST_REVIEW_ACTION_SUBMITTED = 'submitted';
const PULL_REQUEST_REVIEW_ACTION_EDITED = 'edited';
const PULL_REQUEST_REVIEW_ACTION_DISMISSED = 'dismissed';

const PULL_REQUEST_REVIEW_ACTION: { [key: string]: PullRequestReviewActionType } = {
	SUBMITTED: PULL_REQUEST_REVIEW_ACTION_SUBMITTED,
	EDITED: PULL_REQUEST_REVIEW_ACTION_EDITED,
	DISMISSED: PULL_REQUEST_REVIEW_ACTION_DISMISSED,
};

export const PULL_REQUEST_REVIEW = {
	ACTION: PULL_REQUEST_REVIEW_ACTION,
};

export type PullRequestReviewActionType = 'submitted' | 'edited' | 'dismissed';
