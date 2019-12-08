import { AGitHubEvent } from '../AGitHubEvent.abstract';
import { IRepository } from '../../common/IRepository.interface';
import { IRepositoryLabel } from '../../common/IRepositoryLabel.interface';
import { IRepositoryUser } from '../../common/IRepositoryUser.interface';
import { LabelActionType } from './constants';

export class LabelEvent extends AGitHubEvent {
    public action: LabelActionType;
    public label: IRepositoryLabel;
    public repository: IRepository;
    public sender: IRepositoryUser;
    public changes?: any; // TODO only if `edited`
}
