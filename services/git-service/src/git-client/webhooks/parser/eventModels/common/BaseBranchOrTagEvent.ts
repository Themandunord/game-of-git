import { AGitHubEvent } from '../AGitHubEvent.abstract';
import { IRepository } from './IRepository.interface';
import { IRepositoryUser } from './IRepositoryUser.interface';

export class BaseBranchOrTagEvent extends AGitHubEvent {
    public ref: string | 'simple-tag';
    public refType: string | 'tag'; // ref_type
    public masterBranch: string | 'master'; // master_branch
    public description?: string;
    public pusherType: string | 'user';     // pusher_type

    public repository: IRepository;
    public sender: IRepositoryUser;
}
