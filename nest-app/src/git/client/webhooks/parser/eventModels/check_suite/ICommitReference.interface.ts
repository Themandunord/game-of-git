export interface ICommitReference {
    ref: string;
    sha: string;
    repo: {
        id: number;
        url: string;
        name: string;
    };
}
