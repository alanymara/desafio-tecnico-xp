const express = require('express');
const { comprarAtivos, buscarClienteOuAtivo } = require('../controllers/investimentos.controller');
const comprasValidate = require('../middlewares/investimentos.middleware')
require('express-async-errors');

const routers = express.Router();

routers.post('/investimentos/comprar', comprasValidate, comprarAtivos);

routers.get('/ativos/:cod', buscarClienteOuAtivo);

module.exports = routers;