import { ICommitReference } from "./ICommitReference.interface";

export interface IPullRequestReference {
  url: string;
  id: number;
  number: number;
  head: ICommitReference;
  base: ICommitReference;
}
