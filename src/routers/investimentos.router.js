const express = require('express');
const { comprarAtivos } = require('../controllers/investimentos.controller');
const comprasValidate = require('../middlewares/investimentos.middleware')
require('express-async-errors');

const routers = express.Router();

routers.post('/investimentos/comprar', comprasValidate, comprarAtivos);

module.exports = routers;