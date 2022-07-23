const investimentosModel = require('../models/investimentos.model');

const comprarAtivos = async ({ codAtivo, qtdeAtivo, codCliente }) => {
  const ativo = await buscarAtivo(codAtivo);
  const cliente = await investimentosModel.checarCliente(codCliente);

  if (ativo.length === 0) {
    const erro = { status: 400, message: `Codigo do ativo inválido`};
    throw erro;
  }

  if (cliente.length === 0) {
    const erro = { status: 400, message: `Codigo do cliente inválido`};
    throw erro;
  }
  
  if (ativo[0].QtdeAtivo < qtdeAtivo) {
    const erro = { status: 400, message: `Quantidade de ativos ultrapassa a disponibilidade`};
    throw erro;
  }

  const clienteEAtivos = await investimentosModel.buscarCliente(codCliente);
  const clienteTemAtivo = clienteEAtivos.filter(({ CodAtivo }) => CodAtivo === codAtivo);

  if (clienteTemAtivo.length !== 0) {
    const qtdeAtualAtivoComprado = clienteTemAtivo[0].QtdeAtivo +  qtdeAtivo;
    const qtdeAtualAtivo = ativo[0].QtdeAtivo - qtdeAtivo;
    const valorTotalCompra = qtdeAtivo * ativo[0].Valor;
    const saldoClienteAtualizado = cliente[0].Saldo - valorTotalCompra;
    if (saldoClienteAtualizado < 0) {
      const erro = { status: 400, message: `Saldo insuficiente`};
      throw erro;
    }
    await investimentosModel.atualizarQtdeAtivo(codAtivo, qtdeAtualAtivo)
    await investimentosModel.atualizarSaldo(codCliente, saldoClienteAtualizado);
    await investimentosModel.comprarDoMesmoAtivo(qtdeAtualAtivoComprado, codAtivo)
    return { message: `Compra do ativo realizada com sucesso!`};
  } else {
    const qtdeAtualAtivo = ativo[0].QtdeAtivo - qtdeAtivo;
    const valorTotalCompra = qtdeAtivo * ativo[0].Valor;
    const saldoClienteAtualizado = cliente[0].Saldo - valorTotalCompra;
    if (saldoClienteAtualizado < 0) {
      const erro = { status: 400, message: `Saldo insuficiente`};
      throw erro;
    }
    await investimentosModel.atualizarQtdeAtivo(codAtivo, qtdeAtualAtivo)
    await investimentosModel.atualizarSaldo(codCliente, saldoClienteAtualizado);
    await investimentosModel.comprarAtivos(codAtivo, qtdeAtivo, codCliente)
    return { message: `Compra do ativo realizada com sucesso!`};
  }
}

const buscarClienteOuAtivo = async (cod) => {
  if (cod >= 1000) {
    const ativo = await buscarAtivo(cod);
    if(ativo.length === 0) {
      const erro = { status: 400, message: `Codigo do ativo inválido`};
      throw erro;
    }
    return ativo;
  }
  const cliente = await investimentosModel.checarCliente(cod);
  if (cliente.length === 0) {
    const erro = { status: 400, message: `Codigo do cliente inválido`};
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