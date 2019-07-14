const MEMBER_ACTION_ADDED = 'added';
const MEMBER_ACTION_DELETED = 'deleted';
const MEMBER_ACTION_EDITED = 'edited';

const MEMBER_ACTION: { [key: string]: MemberActionType } = {
	ADDED: MEMBER_ACTION_ADDED,
	DELETED: MEMBER_ACTION_DELETED,
	EDITED: MEMBER_ACTION_EDITED,
};

export const MEMBER = {
	ACTION: MEMBER_ACTION,
};

export type MemberActionType = 'added' | 'deleted' | 'edited';
