const STAR_ACTION_CREATED = "created";
const STAR_ACTION_DELETED = "deleted";

const STAR_ACTION: { [key: string]: StarActionType } = {
  CREATED: STAR_ACTION_CREATED,
  DELETED: STAR_ACTION_DELETED
};

export const STAR = {
  ACTION: STAR_ACTION
};

export type StarActionType = "created" | "deleted";
