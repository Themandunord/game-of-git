export abstract class Repository {
    constructor() {}

    public abstract async search<SearchParams>(
        searchParams: SearchParams
    ): Promise<any[]>;

    public abstract async getBy<GetByParams>(
        getByParams: GetByParams
    ): Promise<any[]>;
}
