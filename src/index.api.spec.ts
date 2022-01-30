import app from './';

const server = app();

it('runs', async () => {
  const response = await server.inject({
    method: 'GET',
    url: '/ping',
  });
  expect(response.statusCode).toBe(200);
  expect(response.body).toBe('pong');
});
