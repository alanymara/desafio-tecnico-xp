const loginService = require('../services/login.service');

const login = async (req, res, _next) => {
  const token = await loginService.autenticacao(req.body);
  res.status(200).json(token);
};

module.exports = {
  login,
};