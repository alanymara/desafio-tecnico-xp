const express = require('express');
const { depositoConta, saqueConta, checarCliente } = require('../controllers/conta.controller');
const operacaoValidacao = require('../middlewares/conta.middleware');
require('express-async-errors');

const routers = express.Router();

routers.post('/conta/deposito', operacaoValidacao, depositoConta);

routers.post('/conta/saque', operacaoValidacao, saqueConta);

routers.get('/conta/:cod', checarCliente);


module.exports = routers;