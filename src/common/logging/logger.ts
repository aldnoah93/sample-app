import winston from 'winston';
import LokiTransport from 'winston-loki';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const level = () => {
  const env = process.env.NODE_ENV || 'development'
  const isDevelopment = env === 'development'
  return isDevelopment ? 'debug' : 'warn'
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

winston.addColors(colors)

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `([${info.timestamp}] [${info.level}]): ${info.message}`,
  ),
);

const transports = [
  new winston.transports.Console({format}),
  new winston.transports.File({ filename: 'logs/all.log' }),
  new LokiTransport({
    host: process.env.LOKI_HOST!,
    labels: { app: process.env.LOGGER_APP_NAME},
    json: true,
    format: winston.format.json(),
    replaceTimestamp: true,
    onConnectionError: (err) => console.error(err)
  })
];

const Logger = winston.createLogger({
  level: level(),
  levels,
  transports,
});

export default Logger;