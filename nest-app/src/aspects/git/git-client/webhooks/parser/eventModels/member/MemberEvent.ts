import { AGitHubEvent } from '../AGitHubEvent.abstract';
import { IRepository } from '../../common/IRepository.interface';
import { Member } from '../EventType.types';
import { IRepositoryUser } from '../../common/IRepositoryUser.interface';
import { MemberActionType } from './constants';

export class MemberEvent extends AGitHubEvent {
    public event: Member;

    public action: MemberActionType;

    public member: IRepositoryUser;

    public repository: IRepository;

    public sender: IRepositoryUser;

    public changes?: any; // TODO: only if action was `edited`
}
