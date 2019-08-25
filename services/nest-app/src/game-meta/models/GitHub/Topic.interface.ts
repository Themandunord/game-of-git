import { User } from "./User.interface";

export interface Topic {
  id: string;
  name: string;
  relatedTopics: Topic[];
  stargazers: User[];
}
