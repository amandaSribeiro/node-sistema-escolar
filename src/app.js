const express = require("express");
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const rota_turma = require('./routes/rota_turma');
const rota_aluno = require('./routes/rota_aluno');
const rota_index = require('./routes/rota_index')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
//Remanejando Rotas de turma
app.use('/rota_turma', rota_turma);
app.use('/rota_aluno', rota_aluno);
app.use('/rota_index', rota_index);


const PORT = 8081;
app.listen(PORT, () => {
    console.log("Servidor Rodando");
});

//arquivos estáticos
app.use('/public/css', express.static('public/css'));
app.use('/public/js', express.static('public/js'));
app.use('/public/img', express.static('public/img'));