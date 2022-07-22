const express = require('express');
const { comprarAtivos, getClientesByCod } = require('../controllers/investimentos.controller');
const comprasValidate = require('../middlewares/investimentos.middleware')
require('express-async-errors');

const routers = express.Router();

routers.post('/investimentos/comprar', comprasValidate, comprarAtivos);

routers.get('/ativos/:cod', getClientesByCod);

module.exports = routers;