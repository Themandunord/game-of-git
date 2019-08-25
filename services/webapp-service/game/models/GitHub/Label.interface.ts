import { Issue } from "./Issue.interface";
import { PullRequest } from "./PullRequest.interface";

export interface Label {
  id: string;
  color: string; // ???
  createdAt: any; // todo better datetime
  description: string;
  issues: Issue[];
  name: string;
  pullRequests: PullRequest[];
  updatedAt: any; // todo better datetime
  url: string;
}
