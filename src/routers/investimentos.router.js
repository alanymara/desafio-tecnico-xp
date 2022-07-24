const express = require('express');
const { comprarAtivos, buscarClienteOuAtivo, buscarTodosAtivos } = require('../controllers/investimentos.controller');
const comprasValidacao = require('../middlewares/investimentos.middleware')
const autenticacaoToken = require('../middlewares/autenticacao.middleware');
require('express-async-errors');

const routers = express.Router();

routers.post('/investimentos/comprar', autenticacaoToken, comprasValidacao, comprarAtivos);

routers.get('/ativos', autenticacaoToken, buscarTodosAtivos);

routers.get('/ativos/:cod', autenticacaoToken, buscarClienteOuAtivo);


module.exports = routers;