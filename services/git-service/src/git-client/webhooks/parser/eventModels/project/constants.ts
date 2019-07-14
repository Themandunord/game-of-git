const PROJECT_ACTION_CREATED = 'created';
const PROJECT_ACTION_EDITED = 'edited';
const PROJECT_ACTION_CLOSED = 'closed';
const PROJECT_ACTION_REOPENED = 'reopened';
const PROJECT_ACTION_DELETED = 'deleted';

const PROJECT_ACTION: { [key: string]: ProjectActionType } = {
	CREATED: PROJECT_ACTION_CREATED,
	EDITED: PROJECT_ACTION_EDITED,
	CLOSED: PROJECT_ACTION_CLOSED,
	REOPENED: PROJECT_ACTION_REOPENED,
	DELETED: PROJECT_ACTION_DELETED,
};

export const PROJECT = {
	ACTION: PROJECT_ACTION,
};

export type ProjectActionType = 'created' | 'edited' | 'closed' | 'reopened' | 'deleted';
