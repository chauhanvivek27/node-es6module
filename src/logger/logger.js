import winston from 'winston';

const logFormat = winston.format.printf((info) => `${info.timestamp} [${info.level}]: ${info.message}`);

// instantiate a new Winston Logger
const logger = winston.createLogger({
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), logFormat),
    }),
  ],
  exitOnError: false, // do not exit on handled exceptionsn
});

export default logger;
