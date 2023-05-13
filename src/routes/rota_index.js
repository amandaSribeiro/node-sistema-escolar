const express = require('express');

const router = express.Router();

//_____________ Rotas __________________

//Carregando home

router.get('/', (req, res) => {
    res.render("index");
});
router.get('/imagens', function (req, res) {
    res.render('carrosel')
});
module.exports = router;