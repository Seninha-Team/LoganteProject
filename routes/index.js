var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

Feature/SCRUM-14-Rota-get-login




router.get('/login', async (req, res, next) => {
  res.render('loginPage');
})

router.get("/registro", (req, res) => {
    res.render("registro"); 
});




module.exports = router;
