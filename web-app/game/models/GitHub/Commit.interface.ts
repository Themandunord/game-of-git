import { User } from './User.interface';
import { Comment } from './Comment.interface';
import { PullRequest } from './PullRequest.interface';

export interface Commit {
	additions: number;
	associatedPullRequests: PullRequest[];
	author: User;
	authedDate: any; // todo better datetime
	changedFiles: number;
	comments: Comment[];
	commitUrl: string;
	committer: User;
	deletions: number;
	id: string;
	message: string;
	messageHeadline: string;
	pushedDate: any; // todo better datetime
	treeUrl: string;
	url: string;
}
