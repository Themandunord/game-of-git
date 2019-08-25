import { Issue } from "./Issue.interface";
import { PullRequest } from "./PullRequest.interface";

export interface User {
  id: string;
  url: string;
  name: string;
  login: string;
  avatarUrl: string;
  bio: string;
  company: string;
  createdAt: any; // todo: better date time type
  email: string;
  followers: User[];
  following: User[];
  isBountyHunter: boolean;
  isCampusExpert: boolean;
  isDeveloperProgramMember: boolean;
  isEmployee: boolean;
  isHireable: boolean;
  isSiteAdmin: boolean;
  isViewer: boolean;
  issueComments: Comment[];
  issues: Issue[];
  pullRequests: PullRequest[];
}
