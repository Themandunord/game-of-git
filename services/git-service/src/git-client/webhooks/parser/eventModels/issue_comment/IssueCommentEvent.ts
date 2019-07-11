import { AGitHubEvent } from '../AGitHubEvent.abstract';
import { IRepositoryIssue } from '../common/IRepositoryIssue.interface';
import { IRepositoryUser } from '../common/IRepositoryUser.interface';
import { IRepository } from '../common/IRepository.interface';
import { IRepositoryIssueComment } from '../common/IRepositoryIssueComment.interface';


export class IssueCommentEvent extends AGitHubEvent {
    public action: string;
    public issue: IRepositoryIssue;
    public comment: IRepositoryIssueComment;
    public repository: IRepository;
    public sender: IRepositoryUser;
}