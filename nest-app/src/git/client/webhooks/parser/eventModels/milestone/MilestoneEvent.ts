import { AGitHubEvent } from '../AGitHubEvent.abstract';
import { IRepositoryMilestone } from '../../common/IRepositoryMilestone.interface';
import { IRepositoryUser } from '../../common/IRepositoryUser.interface';
import { Milestone } from '../EventType.types';
import { IRepository } from '../../common/IRepository.interface';
import { MilestoneActionType } from './constants';

export class MilestoneEvent extends AGitHubEvent {
    public event: Milestone;

    public action: MilestoneActionType;

    public milestone: IRepositoryMilestone;

    public changes?: any; // TODO: only if action was `edited`

    public repository: IRepository;

    public sender: IRepositoryUser;
}
