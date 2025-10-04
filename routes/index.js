var express = require('express');
var router = express.Router();

/* GET home page (login) */
router.get('/', function(req, res, next) {
  // 🔹 aqui definimos a variável 'erro' mesmo que não haja erro
  res.render('index', { title: 'Express', erro: null });
});

/* POST login */
router.post('/', function(req, res) {
  const { email, senha } = req.body;

  // teste simples de login
  if (email === 'admin@teste.com' && senha === '1234') {
    res.send('Login bem-sucedido!'); // ou redireciona para /dashboard
  } else {
    // envia a variável 'erro' com a mensagem
    res.render('index', { title: 'Express', erro: 'Usuário ou senha inválidos!' });
  }
});

/* GET registro */
router.get('/registro', function(req, res) {
  res.render('registro');
});

module.exports = router;
