import { User } from "./User.interface";
import {
  PullRequest,
  Repository
} from "../../../git-client/webhooks/parser/eventModels/EventType.types";
export interface ReviewThread {
  comments: Comment[];
  id: string;
  isResolved: boolean;
  pullRequest: PullRequest;
  repository: Repository;
  resolvedBy: User;
}
