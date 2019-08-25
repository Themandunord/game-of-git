import { User } from "./User.interface";
import { Label } from "./Label.interface";

export interface Issue {
  id: string;
  assignees: User[];
  author: User;
  bodyText: string;
  closed: any; // todo better date time timestamp
  comments: Comment[];
  createdAt: any; //todo better datetime type
  labels: Label[];
  lastEditedAt: any; // todo better dattime
  locked: boolean;
  number: number;
  participants: User[];
  state: string; // ??
  title: string;
  updatedAt: any; // todo better datetime
  url: string;
}
