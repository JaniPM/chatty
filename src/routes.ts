import { FastifyInstance } from 'fastify';

async function routes(fastify: FastifyInstance) {
  fastify.get('/', async () => ({ hello: 'world' }));
  fastify.get('/ping', async () => 'pong');
}

export default routes;
