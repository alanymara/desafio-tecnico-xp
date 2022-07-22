const contaService = require('../services/conta.service');

const depositoConta = async (req, res) => {
  const resultado = await contaService.depositoConta(req.body);
  res.status(201).json(resultado);
};

const saqueConta = async (req, res) => {
  const resultado = await contaService.saqueConta(req.body);
  res.status(201).json(resultado);
};

module.exports = {
  depositoConta,
  saqueConta,
}