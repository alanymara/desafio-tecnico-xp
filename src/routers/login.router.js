const express = require('express');
require('express-async-errors');

const routers = express.Router();

routers.post('/login', loginController);


module.exports = routers;