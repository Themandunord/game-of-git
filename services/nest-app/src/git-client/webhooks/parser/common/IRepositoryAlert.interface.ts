export interface IRepositoryAlert {
  id: number;
  affectedRange: string;
  affectedPackageName: string;
  externalReference: string;
  externalIdentifier: string;
  fixedIn: string;
}
