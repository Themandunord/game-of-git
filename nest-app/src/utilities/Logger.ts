import { createLogger, transports, format } from 'winston';

const level = process.env.LOG_LEVEL;

const logger = createLogger({
    level,
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
    ),
    defaultMeta: { service: 'game-of-git-default' },
    transports: [
        //
        // - Write to all logs with level `info` and below to `quick-start-combined.log`.
        // - Write all logs error (and below) to `quick-start-error.log`.
        //
        // new transports.File({ filename: 'game-of-git-error.log', level: 'error' }),
        // new transports.File({ filename: 'game-of-git-combined.log' })
    ]
});

//
// If we're not in production then **ALSO** log to the `console`
// with the colorized simple format.
//
if (process.env.NODE_ENV !== 'production') {
    logger.add(
        new transports.Console({
            format: format.combine(format.colorize(), format.simple())
        })
    );
}

// export default logger;
