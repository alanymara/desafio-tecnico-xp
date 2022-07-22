const investimentosServices = require('../services/investimentos.service');

const comprarAtivos = async (req, res) => {
  const result = await investimentosServices.comprarAtivos(req.body);
  return res.status(201).json(result);
}

module.exports = {
  comprarAtivos,
}