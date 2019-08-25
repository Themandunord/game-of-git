import { IRepositoryUser } from "../../common/IRepositoryUser.interface";

export interface ICheckApp {
  id: number;
  nodeId: string;
  owner: IRepositoryUser;
  name: string;
  description: string;
  externalUrl: string;
  htmlUrl: string;
  createdAt: string;
  updatedAt: string;
  permissions: any; // TODO
  events: any[]; // TODO
}
