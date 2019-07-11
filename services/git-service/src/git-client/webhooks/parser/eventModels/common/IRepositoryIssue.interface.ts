import { IRepositoryUser } from './IRepositoryUser.interface';
import { IRepositoryLabel } from './IRepositoryLabel.interface';
import { IRepositoryMilestone } from './IRepositoryMilestone.interface';

export interface IRepositoryIssue {
  url: string;
  repositoryUrl: string; // repository_url
  labelsUrl: string; // labels_url
  commentsUrl: string; // comments_url
  eventsUrl: string; // events_url
  htmlUrl: string; // html_url
  id: number;
  nodeId: string; // node_id
  number: number;
  title: string;
  state: string;
  locked: boolean;
  user: IRepositoryUser;
  labels: IRepositoryLabel[];
  assignee: IRepositoryUser;
  assignees: IRepositoryUser[];
  milestone: IRepositoryMilestone;
  comments: number;
  createdAt: string; // created_at
  updatedAt: string; // updated_at
  closedAt?: string; // closed_at
  authorAssociation: string; // author_association
  body: string;
}
