import { LabelEvent } from './label/LabelEvent';
import { IssuesEvent } from './issues/IssuesEvent';
import { DeleteEvent } from './delete/DeleteEvent';
import { CreateEvent } from './create/CreateEvent';
import { PullRequestEvent } from './pull_request/PullRequestEvent';
import { PullRequestReviewCommentEvent } from './pull_request_review_comment/PullRequestReviewCommentEvent';
import { PullRequestReviewEvent } from './pull_request_review/PullRequestReviewEvent';
import { WatchEvent } from './watch/WatchEvent';
import { StarEvent } from './star/StarEvent';
import { PushEvent } from './push/PushEvent';
import { PingEvent } from './ping/PingEvent';
import { IssueCommentEvent } from './issue_comment/IssueCommentEvent';

// TODO: Get the rest of the events

/**
 * Defined GitHub Event Models
 */
const models = [
  PullRequestEvent,
  PullRequestReviewCommentEvent,
  PullRequestReviewEvent,
  WatchEvent,
  StarEvent,
  PushEvent,
  PingEvent,
  CreateEvent,
  DeleteEvent,
  IssueCommentEvent,
  IssuesEvent,
  LabelEvent,
];

export default models;
