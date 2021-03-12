import { env } from 'process';
import * as winston from 'winston';

export const winstonConfig = {
  level: env.LOG_LEVEL,
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.colorize(),
    winston.format.prettyPrint(),
    winston.format.printf(({ level, message, timestamp }) => {
      return `${timestamp} [${env.NODE_ENV}] [${level}]: ${message}`;
    }),
  ),
};
