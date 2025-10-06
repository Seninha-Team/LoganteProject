const request = require('supertest');
const app = require('../app');

describe('🧾 Testes da página de registro', () => {
  test('GET /registro deve renderizar a página de registro', async () => {
    const res = await request(app).get('/registro');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('<');
  });
});