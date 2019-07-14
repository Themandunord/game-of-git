import { AGitHubEvent } from '../eventModels/AGitHubEvent.abstract';
import { IRepository } from './IRepository.interface';
import { IRepositoryUser } from './IRepositoryUser.interface';

const REF_TYPE_BRANCH = 'branch';
const REF_TYPE_TAG = 'tag';

export const REF_TYPE = {
	BRANCH: REF_TYPE_BRANCH,
	TAG: REF_TYPE_TAG,
};

export type RefType = 'branch' | 'tag';

export class BaseBranchOrTagEvent extends AGitHubEvent {
	public ref: string | 'simple-tag';
	public refType: RefType; // ref_type
	public masterBranch: string | 'master'; // master_branch
	public description?: string;
	public pusherType: string | 'user'; // pusher_type

	public repository: IRepository;
	public sender: IRepositoryUser;
}
