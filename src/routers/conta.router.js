const express = require('express');
const { depositoConta } = require('../controllers/conta.controller');
const depositoValidate = require('../middlewares/conta.middleware');
require('express-async-errors');

const routers = express.Router();

routers.post('/conta/deposito', depositoValidate, depositoConta);

/* routers.get('conta/saque', buscarClienteOuAtivo);

routers.get('conta/:id', buscarClienteOuAtivo); */


module.exports = routers;