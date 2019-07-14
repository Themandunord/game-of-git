import {IRepositoryUser} from './IRepositoryUser.interface';

export interface IRepositoryIssueComment {
    url: string;
    htmlUrl: string; // html_url
    issueUrl: string; // issue_url
    id: number;
    nodeId: string; // node_id
    user: IRepositoryUser;
    createdAt: string; // created_at
    updatedAt: string; // updated_at
    authorAssociation: string; // author_association
    body: string;
}
