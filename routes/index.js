var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/registro", (req, res) => {
  const { nome, senha } = req.body;

  // validações
  if (!nome || nome.trim() === "") {
    return res.status(400).send("Nome não pode ser vazio ou nulo.");
  }

  if (!senha || senha.trim() === "") {
    return res.status(400).send("Senha não pode ser vazia ou nula.");
  }

  // verifica duplicado
  const usuarioExiste = global.usuarios.some(u => u.nome === nome);
  if (usuarioExiste) {
    return res.status(400).send("Usuário já existe.");
  }

  // adiciona usuário na variável global
  global.usuarios.push({ nome, senha });

  // renderiza a página deu_certo.ejs passando o nome (MUDAR O NOME DA PÁGINA PARA A QUAL DEVE REDIRECIONAR)
  res.render("deu_certo", { nome });
});

router.get('/login', async (req, res, next) => {
  res.render('loginPage');
})

router.get("/registro", (req, res) => {
    res.render("registro"); 
});




module.exports = router;
