import { Topic } from "./Topic.interface";
import { User } from "./User.interface";

export interface Repository {
  collaborators: User[];
  description: string;
  hasBranchRules: boolean;
  hasContributingGuidelines: boolean;
  hasPullRequestTemplate: boolean;
  hasReadme: boolean;
  hasWiki: boolean;
  id: string; // i think
  isArchived: boolean;
  isDisabled: boolean;
  isFork: boolean;
  isLocked: boolean;
  isPrivate: boolean;
  license: string;
  name: string;
  owner: User;
  primaryLanguage: string; // TODO: extract language types into enum
  repositoryTopics: Topic[];
  sshUrl: string;
  stargazers: User[];
  updatedAt: any; // get better date time type
  url: string;
  watchers: User[];
}
