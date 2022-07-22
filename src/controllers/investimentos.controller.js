const investimentosServices = require('../services/investimentos.service');

const comprarAtivos = async (req, res) => {
  const result = await investimentosServices.comprarAtivos(req.body);
  return res.status(201).json(result);
}

const getClientesByCod = async (req, res) => {
  const { cod } = req.params;
  const result = await investimentosServices.getClientesByCod(cod);
  return res.status(200).json(result);
}

module.exports = {
  comprarAtivos,
  getClientesByCod,
}