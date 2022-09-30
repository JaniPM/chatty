import Fastify from 'fastify';
import routes from './routes';

function init(opts = {}) {
  const app = Fastify(opts);
  app.register(routes);
  return app;
}

export default init;
