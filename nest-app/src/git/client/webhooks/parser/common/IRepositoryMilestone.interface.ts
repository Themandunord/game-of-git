import { IRepositoryUser } from './IRepositoryUser.interface';

export interface IRepositoryMilestone {
    url: string;
    htmlUrl: string; // html_url
    labelsUrl: string; // labels_url
    id: number;
    nodeId: string; // node_id
    number: number;
    title: string;
    description: string;
    creator: IRepositoryUser;
    openIssues: number; // open_issues
    closedIssues: number; // closed_issues
    state: string;
    createdAt: string; // created_at
    updatedAt: string; // updated_at
    dueOn: string; // due_on
    closedAt: string; // closed_at
}
