import { Logger } from './Logger';

export abstract class ALogger {
    private readonly logger = new Logger(null);

    constructor(...args) {
        if (this.constructor && this.constructor.name) {
            console.log(`Setting prefix for this logger implementation to: ${this.constructor.name}`);
            this.logger.setPrefix(this.constructor.name);
        }
    }

    protected l(...args: any[]) {
        return this.logger.l(args);
    }

    protected e(...args: any[]) {
        return this.logger.e(args);
    }

}