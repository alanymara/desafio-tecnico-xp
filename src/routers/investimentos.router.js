const express = require('express');
const { comprarAtivos } = require('../controllers/investimentos.controller');
require('express-async-errors');

const routers = express.Router();

routers.post('/investimentos/comprar', comprarAtivos);

module.exports = routers;