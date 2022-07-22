const express = require('express');
const { comprarAtivos, buscarCliente } = require('../controllers/investimentos.controller');
const comprasValidate = require('../middlewares/investimentos.middleware')
require('express-async-errors');

const routers = express.Router();

routers.post('/investimentos/comprar', comprasValidate, comprarAtivos);

routers.get('/ativos/:cod', buscarCliente);

module.exports = routers;