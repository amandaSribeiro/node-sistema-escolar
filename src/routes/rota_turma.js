const express = require('express');
const router = express.Router();
//vamos carregar todos os modelos
const Turma = require("../models/turma");

//_______________Rotas da turma__________________
//Alteração da rota das turmas
//Carregando todas as turmas na Rota turma
router.get('/cliente', (req, res) => {
 Turma.findAll().then((turmas) => {
 turmas = turmas.map((turma) => {
 return turma.toJSON();
 });
 res.render("admin/turma/turma", { turmas: turmas });
 });
});

//Deletando a turma
router.get('/deletar_turma/:id', (req, res) => {
 Cliente.destroy({ where: { 'id_turma': req.params.id } }).then(() => {
 res.redirect("/rota_turma/turma");
 }).catch((err) => {
 res.render("Essa turma não existe");
 });
});
//abre e preenche o form de edição da turma
router.get('/editar_turma/:id', (req, res) => {
 Turma.findAll({ where: { 'id_turma': req.params.id } }).then((turmas) => {
 turmas = turmas.map((turma) => { return turma.toJSON() })
;
 res.render("admin/turma/editturma", { turmas: turmas });
 });
});

//Edita os dados da turma
router.post('/turma/editar_turma', (req, res) => {
    Turma.update({
    nome: req.body.nome,
    dt_nasc: req.body.dt_nasc,
    cpf: req.body.cpf,
    email: req.body.email
    },
    {
    where: { id_turma: req.body.id_turma}
    }).then(() => {
    res.redirect("/rota_turma/turma");
    }).catch((erro) => {
    res.send("Esta turma não existe " + erro);
    });
   });
   //rota do form para add turma
   router.get('/turma/add', (req, res) => {
    res.render("admin/turma/addturma");
   });
   //rota do botão do form para add turma
   router.post('/turma/nova', (req, res) => {
    Turma.create({
    nome: req.body.nome,
    dt_nasc: req.body.dt_nasc,
    cpf: req.body.cpf,
    email: req.body.email
    }).then(() => {
    res.redirect("/rota_turma/turma");
    }).catch((erro) => {
    res.send('Houve um erro: ' + erro);
    });
   });
   //_______Fim das rotas de turmas______________
   module.exports = router;
   