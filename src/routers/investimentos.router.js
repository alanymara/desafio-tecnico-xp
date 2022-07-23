const express = require('express');
const { comprarAtivos, buscarClienteOuAtivo } = require('../controllers/investimentos.controller');
const comprasValidacao = require('../middlewares/investimentos.middleware')
require('express-async-errors');

const routers = express.Router();

routers.post('/investimentos/comprar', comprasValidacao, comprarAtivos);

routers.get('/ativos/:cod', buscarClienteOuAtivo);

module.exports = routers;