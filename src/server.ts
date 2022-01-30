import app from './app';

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
