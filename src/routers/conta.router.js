const express = require('express');
const { depositoConta } = require('../controllers/conta.controller');
const depositoValidacao = require('../middlewares/conta.middleware');
require('express-async-errors');

const routers = express.Router();

routers.post('/conta/deposito', depositoValidacao, depositoConta);

/* routers.get('conta/saque', buscarClienteOuAtivo);

routers.get('conta/:id', buscarClienteOuAtivo); */


module.exports = routers;