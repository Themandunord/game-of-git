const RELEASE_ACTION_PUBLISHED = "published";
const RELEASE_ACTION_UNPUBLISHED = "unpublished";
const RELEASE_ACTION_CREATED = "created";
const RELEASE_ACTION_DELETED = "deleted";
const RELEASE_ACTION_EDITED = "edited";
const RELEASE_ACTION_PRERELEASED = "prereleased";

const RELEASE_ACTION: { [key: string]: ReleaseActionType } = {
  PUBLISHED: RELEASE_ACTION_PUBLISHED,
  UNPUBLISHED: RELEASE_ACTION_UNPUBLISHED,
  CREATED: RELEASE_ACTION_CREATED,
  DELETED: RELEASE_ACTION_DELETED,
  EDITED: RELEASE_ACTION_EDITED,
  PRERELEASED: RELEASE_ACTION_PRERELEASED
};

export type ReleaseActionType =
  | "published"
  | "unpublished"
  | "created"
  | "edited"
  | "deleted"
  | "prereleased";
