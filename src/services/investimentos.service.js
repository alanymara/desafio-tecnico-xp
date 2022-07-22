const investimentosModel = require('../models/investimentos.model');

const comprarAtivos = async ({ codAtivo, qtdeAtivo, codCliente }) => {
  const result = await investimentosModel.comprarAtivos(codAtivo, qtdeAtivo, codCliente)
  return result;
}

module.exports = {
  comprarAtivos,
}