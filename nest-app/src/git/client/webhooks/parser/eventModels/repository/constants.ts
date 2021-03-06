const REPOSITORY_ACTION_CREATED = 'created';
const REPOSITORY_ACTION_DELETED = 'deleted';
const REPOSITORY_ACTION_ARCHIVED = 'archived';
const REPOSITORY_ACTION_UNARCHIVED = 'unarchived';
const REPOSITORY_ACTION_EDITED = 'edited';
const REPOSITORY_ACTION_RENAMED = 'renamed';
const REPOSITORY_ACTION_TRANSFERRED = 'transferred';
const REPOSITORY_ACTION_PUBLICIZED = 'publicized';
const REPOSITORY_ACTION_PRIVATIZED = 'privatized';

const REPOSITORY_ACTION: { [key: string]: RepositoryActionType } = {
    CREATED: REPOSITORY_ACTION_CREATED,
    DELETED: REPOSITORY_ACTION_DELETED,
    ARCHIVED: REPOSITORY_ACTION_ARCHIVED,
    UNARCHIVED: REPOSITORY_ACTION_UNARCHIVED,
    EDITED: REPOSITORY_ACTION_EDITED,
    RENAMED: REPOSITORY_ACTION_RENAMED,
    TRANSFERRED: REPOSITORY_ACTION_TRANSFERRED,
    PUBLICIZED: REPOSITORY_ACTION_PUBLICIZED,
    PRIVATIZED: REPOSITORY_ACTION_PRIVATIZED
};

export const REPOSITORY = {
    ACTION: REPOSITORY_ACTION
};

export type RepositoryActionType =
    | 'created'
    | 'deleted'
    | 'archived'
    | 'unarchived'
    | 'edited'
    | 'renamed'
    | 'transferred'
    | 'publicized'
    | 'privatized';
