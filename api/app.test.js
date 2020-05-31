const request = require('supertest');
const app = require('./app');

describe('GET /products', () => {
  test('It returns products successfully', async () => {
    const response = await request(app).get('/products');
    expect(response.statusCode).toBe(200);
  });
});
