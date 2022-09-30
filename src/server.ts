import app from './app';

const isProduction = process.env.NODE_ENV === 'production';

const logger = isProduction
  ? true
  : {
      transport: {
        target: 'pino-pretty',
        options: {
          translateTime: 'HH:MM:ss Z',
          ignore: 'pid,hostname',
        },
      },
    };

const server = app({
  logger,
});
server.listen({ port: 3000 }, err => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
