var express = require('express');
var router = express.Router();

/* GET home page (login) */
router.get('/', function(req, res, next) {
  // 🔹 aqui definimos a variável 'erro' mesmo que não haja erro
  res.render('index', { title: 'Express', erro: null });
});

/* POST login */
router.post('/login', function(req, res) {
  const { username, password } = req.body;
  if(!username || username ==='' || !password || password ==='') res.status(400).send("Todos os campos devem ser preenchidos");
  const usuario = global.usuarios.find(p => p.username === username);
  if(usuario.password !== password) res.status(400).send("Senha incorreta");
  res.status(200).send('Login Concluído');
  
});

router.post('/register', async (req, res) => {
  const {username, password} = req.body;
  if(username == null || username === ''){
    res.status(500).send("Usuário Inválido para registro")
  }
  if(password == null || password === ''){
    res.status(500).send("A senha deve conter pelo menos um caractere")
  }

  global.usuarios.push({username, password});
  res.redirect('/login')


})

/* GET registro */
router.get('/registro', function(req, res) {
  res.render('registro');
});

module.exports = router;
