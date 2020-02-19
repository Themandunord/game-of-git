import { Logger } from '@nestjs/common';

export abstract class ApiKey {
    protected logger: Logger;
    constructor() {}

    /**
     *
     * Tests the provided ApiKey and returns a boolean if it is valid
     * @param string apiKey
     */
    public abstract testApiKey(apiKey: string): Promise<boolean>;
}
