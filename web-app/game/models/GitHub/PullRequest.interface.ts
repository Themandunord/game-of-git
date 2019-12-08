import { PullRequestReview } from './../../../services/git-service/src/git-client/webhooks/parser/eventModels/EventType.types';
import { Commit } from './Commit.interface';
import { User } from './User.interface';
import { Label } from './Label.interface';
import { FileDiff } from './FileDiff.interface';

export interface PullRequest {
	additions: number;
	assignees: User[];
	auther: User;
	bodyText: string;
	changeddFiles: number;
	closed: boolean;
	closedAt: any; // todo better datetime
	comments: Comment[];
	commits: Commit[];
	createdAt: any; // todo better datetime
	deletions: number;
	files: FileDiff[];
	id: string;
	isCrossRepository: boolean;
	labels: Label[];
	locked: boolean;
	merged: boolean;
	mergedAt: any; // todo better datetime
	mergedBy: User;
	number: number;
	particiapants: User[];
	publishedAt: any; // todo better datetime
	reviewRequests: any; //todo better type
	reviews: PullRequestReview[];
	reviewThreads: any; //todo better type
	state: any; // todo better type
	title: string;
	updatedAt: any; // todo better datetime
	url: string;
}
