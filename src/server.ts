import app from './app';

// TODO: log level and pretty print is now for development.
// Should configure based on the NODE_ENVIRONMENT.
const server = app({
  logger: {
    level: 'debug',
    prettyPrint: true,
  },
});

server.listen(3000, err => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
