const express = require('express');
const { depositoConta, saqueConta } = require('../controllers/conta.controller');
const depositoValidacao = require('../middlewares/conta.middleware');
require('express-async-errors');

const routers = express.Router();

routers.post('/conta/deposito', depositoValidacao, depositoConta);

routers.post('/conta/saque', saqueConta);

/* routers.get('conta/:id', buscarClienteOuAtivo); */


module.exports = routers;