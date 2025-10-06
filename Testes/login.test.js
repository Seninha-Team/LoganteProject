const request = require('supertest');
const app = require('../app');

describe(' Testes de login', () => {
  test('GET / deve renderizar a página de login', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('<'); 
  });

  test('POST / com credenciais válidas deve retornar sucesso', async () => {
    const res = await request(app)
      .post('/')
      .send({ email: 'admin@teste.com', senha: '1234' });
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Login bem-sucedido');
  });

  test('POST / com credenciais inválidas deve retornar erro', async () => {
    const res = await request(app)
      .post('/')
      .send({ email: 'usuario@errado.com', senha: '0000' });
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Usuário ou senha inválidos');
  });
});
