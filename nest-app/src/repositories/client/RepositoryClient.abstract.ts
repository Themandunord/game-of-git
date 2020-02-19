export abstract class RepositoryClient {
    /**
     *
     * Tests the provided APIKey and returns a boolean if it is valid
     * @param string apiKey
     */
    public abstract testAPIKey(apiKey: string): Promise<boolean>;
}
