import { User } from './User.interface';

export interface Comment {
	author: User;
	bodyText: string;
	createdAt: any; // todo better datetime
	id: string;
	url: string;
}
