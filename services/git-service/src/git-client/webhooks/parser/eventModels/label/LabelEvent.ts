import { AGitHubEvent } from '../AGitHubEvent.abstract';
import { IRepositoryLabel } from '../common/IRepositoryLabel.interface';
import { IRepository } from '../common/IRepository.interface';
import { IRepositoryUser } from '../common/IRepositoryUser.interface';

export class LabelEvent extends AGitHubEvent {
    public action: string;
    public label: IRepositoryLabel;
    public repository: IRepository;
    public sender: IRepositoryUser;
}