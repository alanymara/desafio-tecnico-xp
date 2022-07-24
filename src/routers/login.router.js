const express = require('express');
require('express-async-errors');
const { login } = require('../controllers/login.controller');

const routers = express.Router();

routers.post('/login', login);


module.exports = routers;