const express = require('express');
const { depositoConta, saqueConta, checarCliente } = require('../controllers/conta.controller');
const operacaoValidacao = require('../middlewares/conta.middleware');
const autenticacaoToken = require('../middlewares/autenticacao.middleware');
require('express-async-errors');

const routers = express.Router();

routers.get('/conta/:cod', autenticacaoToken, checarCliente);

routers.post('/conta/deposito', operacaoValidacao, depositoConta);

routers.post('/conta/saque', autenticacaoToken, operacaoValidacao, saqueConta);



module.exports = routers;