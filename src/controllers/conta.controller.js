const contaService = require('../services/conta.service');

const depositoConta = async (req, res) => {
  const resultado = await contaService.depositoConta(req.body);
  res.status(201).json(resultado);
};

const saqueConta = async (req, res) => {
  const token = req.headers.authorization;
  const dados = req.body;
  const resultado = await contaService.saqueConta(token, dados);
  res.status(201).json(resultado);
};

const checarCliente = async (req, res) => {
  const { cod } = req.params;
  const resultado = await contaService.checarCliente(cod);
  res.status(200).json(resultado);
}

module.exports = {
  depositoConta,
  saqueConta,
  checarCliente,
}