const express = require('express');
const { comprarAtivos, buscarClienteOuAtivo } = require('../controllers/investimentos.controller');
const comprasValidacao = require('../middlewares/investimentos.middleware')
require('express-async-errors');

const routers = express.Router();

routers.get('/ativos/:cod', buscarClienteOuAtivo);

routers.post('/investimentos/comprar', comprasValidacao, comprarAtivos);

module.exports = routers;