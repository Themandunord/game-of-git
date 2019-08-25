const LABEL_ACTION_CREATED = "created";
const LABEL_ACTION_EDITED = "edited";
const LABEL_ACTION_DELETED = "deleted";

const LABEL_ACTION: { [key: string]: LabelActionType } = {
  CREATED: LABEL_ACTION_CREATED,
  EDITED: LABEL_ACTION_EDITED,
  DELETED: LABEL_ACTION_DELETED
};

export const LABEL = {
  ACTION: LABEL_ACTION
};

export type LabelActionType = "created" | "edited" | "deleted";
