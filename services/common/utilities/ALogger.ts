import { Logger } from './Logger';

/**
 * ALogger is a convenience class that adds the shorthand functions `l` (`this.l`) and `e` (`this.e`) to a class, that correspond to `console.log` and `console.error` respectively.
 * 
 * The logging can be toggled on or off by each instance of the class
 */
export abstract class ALogger {
    private readonly logger = new Logger(null);

    constructor(...args) {
        if (this.constructor && this.constructor.name) {
            // console.log(`Setting prefix for this logger implementation to: ${this.constructor.name}`);
            this.logger.setPrefix(this.constructor.name);
        }
    }

    protected enableLogger() {
        this.logger.enable();
    }

    protected disableLogger() {
        this.logger.disable();
    }

    protected l(...args: any[]) {
        return this.logger.l(args);
    }

    protected e(...args: any[]) {
        if (args.length === 1) {
            args = args[0];
        }
        return this.logger.e(args);
    }

}