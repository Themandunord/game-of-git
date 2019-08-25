interface IRepositoryLink {
  href: string;
}
export interface IRepositoryEventLinks {
  self: IRepositoryLink;
  html: IRepositoryLink;
  issue: IRepositoryLink;
  comments: IRepositoryLink;
  reviewComments: IRepositoryLink; // review_comments
  reviewComment: IRepositoryLink; // review_comment
  commits: IRepositoryLink;
  statuses: IRepositoryLink;
}
