import { ApiKey } from '../../../abstract/entities/ApiKey/abstract';
import { Logger } from '@nestjs/common';

export class SampleApiKey extends ApiKey {
    constructor() {
        super();
        this.logger = new Logger('SampleApiKey');
    }

    public async testApiKey(key: string) {
        if (key === 'false') {
            return false;
        }
        return true;
    }
}
