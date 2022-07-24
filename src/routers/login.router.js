const express = require('express');
require('express-async-errors');
const { login } = require('../controllers/login.controller');
const { loginValidacaoCampos } = require('../middlewares/login.middleware');

const routers = express.Router();

routers.post('/login', loginValidacaoCampos, login);

module.exports = routers;