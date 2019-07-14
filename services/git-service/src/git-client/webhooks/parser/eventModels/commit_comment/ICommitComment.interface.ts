import { IRepositoryUser } from '../../common/IRepositoryUser.interface';

export interface ICommitComment {
	url: string;
	htmlUrl: string;
	id: number;
	nodeId: string;
	user: IRepositoryUser;
	position: null | any;
	line: null | any;
	path: null | any;
	commitId: string;
	createdAt: string;
	updatedAt: string;
	authorAssociation: string;
	body: string;
}
