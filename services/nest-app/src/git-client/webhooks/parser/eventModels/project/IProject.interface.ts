import { IRepositoryUser } from "../../common/IRepositoryUser.interface";

export interface IProject {
  ownerUrl: string;
  url: string;
  htmlUrl: string;
  columnsUrl: string;
  id: number;
  nodeId: string;
  name: string;
  body: string;
  number: number;
  state: "open" | string;
  creator: IRepositoryUser;
  createdAt: string;
  updatedAt: string;
}
