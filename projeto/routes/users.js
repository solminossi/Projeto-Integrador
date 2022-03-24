var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/cadastro', (req,res)=> {res.render('cadastro',{ viewName: 'cadastro'})});

router.post('/cadastro', (req,res)=> {
  const usuario = req.body
  console.log(usuario)
  return res.redirect('/home')
})

module.exports = router;
