const investimentosModel = require('../models/investimentos.model');

const comprarAtivos = async ({ codAtivo, qtdeAtivo, codCliente }) => {
  const ativo = await getAtivosByCod(codAtivo);
  const cliente = await getClientesByCod(codCliente);
  
  if (ativo.length === 0 || cliente.length === 0) {
    const erro = { status: 400, message: 'Codigo do ativo ou do cliente inválido'};
    throw erro;
  }
  const result = await investimentosModel.comprarAtivos(codAtivo, qtdeAtivo, codCliente)
  return result;
}

const getAtivosByCod = async (cod) => {
  const result = await investimentosModel.getAtivosByCod(cod);
  return result;
}

const getClientesByCod = async (cod) => {
  const result = await investimentosModel.getClientesByCod(cod);
  return result;
}

module.exports = {
  comprarAtivos,
  getAtivosByCod,
  getClientesByCod,
}