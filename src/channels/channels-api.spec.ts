import request from 'supertest';
import app from '../app';

const prefix = '/api/v1';

it('lists all channels', async () => {
  const response = await request(app)
    .get(`${prefix}/channels`)
    .set('Accept', 'application/json');

  expect(response.headers['content-type']).toMatch(/json/);
  expect(response.status).toEqual(200);
  expect(response.body).toEqual([]);
});
