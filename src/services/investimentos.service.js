const investimentosModel = require('../models/investimentos.model');

const comprarAtivos = async ({ codAtivo, qtdeAtivo, codCliente }) => {
  const ativo = await buscarAtivo(codAtivo);
  const cliente = await investimentosModel.checarCliente(codCliente);

  if (ativo.length === 0) {
    const erro = { status: 400, message: 'Codigo do ativo inválido'};
    throw erro;
  }

  if (cliente.length === 0) {
    const erro = { status: 400, message: 'Codigo do cliente inválido'};
    throw erro;
  }
  
  if (ativo[0].qtdeAtivo < qtdeAtivo) {
    const erro = { status: 400, message: 'Quantidade de ativos ultrapassa a disponibilidade'};
    throw erro;
  }
  const qtdeAtual = ativo[0].qtdeAtivo - qtdeAtivo;

  await investimentosModel.comprarAtivos(codAtivo, qtdeAtivo, codCliente)
  await investimentosModel.atualizarQtdeAtivo(codAtivo, qtdeAtual)
  return { message: `Compra do ativo realizada com sucesso!`};
}

const buscarClienteOuAtivo = async (cod) => {
  if (cod >= 1000) {
    const ativo = await buscarAtivo(cod);
    if(ativo.length === 0) {
      const erro = { status: 400, message: 'Codigo do ativo inválido'};
      throw erro;
    }
    return ativo;
  }
  const cliente = await investimentosModel.checarCliente(cod);
  if (cliente.length === 0) {
    const erro = { status: 400, message: 'Codigo do cliente inválido'};
    throw erro;
  }
  const resultado = await investimentosModel.buscarCliente(cod);
  if (resultado.length === 0) {
    return { codCliente: cliente[0].codCliente, message: `Cliente sem ativos` };
  }
  return resultado;
}

const buscarAtivo = async (cod) => {
  const result = await investimentosModel.buscarAtivo(cod);
  return result;
}

module.exports = {
  comprarAtivos,
  buscarAtivo,
  buscarClienteOuAtivo,
}