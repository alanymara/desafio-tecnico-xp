const express = require('express');
const { depositoConta } = require('../controllers/conta.controller');
require('express-async-errors');

const routers = express.Router();

routers.post('/conta/deposito', depositoConta);

/* routers.get('conta/saque', buscarClienteOuAtivo);

routers.get('conta/:id', buscarClienteOuAtivo); */


module.exports = routers;