import { Commit } from "./Commit.interface";
import { PullRequest } from "./PullRequest.interface";

export interface Branch {
  name: string;
  commits: Commit[];
  pullRequest?: PullRequest;
  merged?: boolean; // I dunno...maybe?
}
