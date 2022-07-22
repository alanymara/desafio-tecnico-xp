const investimentosServices = require('../services/investimentos.service');

const comprarAtivos = async (req, res) => {
  const resultado = await investimentosServices.comprarAtivos(req.body);
  return res.status(201).json(resultado);
}

const buscarClienteOuAtivo = async (req, res) => {
  const { cod } = req.params;
  const resultado = await investimentosServices.buscarClienteOuAtivo(cod);
  return res.status(200).json(resultado);
}

module.exports = {
  comprarAtivos,
  buscarClienteOuAtivo,
}