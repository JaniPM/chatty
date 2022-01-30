import fastify from 'fastify';

export default function init(opts = {}) {
  const app = fastify(opts);

  app.get('/ping', async () => 'pong');

  return app;
}
