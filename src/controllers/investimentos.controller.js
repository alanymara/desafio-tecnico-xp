const investimentosServices = require('../services/investimentos.service');

const comprarAtivos = async (req, res) => {
  const result = await investimentosServices.comprarAtivos(req.body);
  console.log(result);
  return res.status(201).json(result);
}

module.exports = {
  comprarAtivos,
}