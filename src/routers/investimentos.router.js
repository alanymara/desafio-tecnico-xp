const express = require('express');
const investimentosController = require('../controllers/investimentos.controller');

const routers = express.Router();

routers.post('/investimentos/comprar', investimentosController.comprarAtivos);

module.exports = routers;