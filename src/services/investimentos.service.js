const investimentosModel = require('../models/investimentos.model');
const contaService= require('../services/conta.service');

const comprarAtivos = async ({ codAtivo, qtdeAtivo, codCliente }) => {
  const ativo = await buscarAtivo(codAtivo);
  const cliente = await contaService.checarCliente(codCliente);
  
  if (ativo[0].QtdeAtivo < qtdeAtivo) {
    const erro = { status: 400, message: `Quantidade de ativos ultrapassa a disponibilidade`};
    throw erro;
  };

  const clienteEAtivos = await investimentosModel.buscarCliente(codCliente);
  const clienteTemEsseAtivo = clienteEAtivos.filter(({ CodAtivo }) => CodAtivo === codAtivo);

  if (clienteTemEsseAtivo.length !== 0) {
    const qtdeAtualAtivoComprado = clienteTemEsseAtivo[0].QtdeAtivo +  qtdeAtivo;
    const saldoClienteAtualizado = verificarSaldoDisponivel(qtdeAtivo, ativo[0].Valor, cliente[0].Saldo );
    await investimentosModel.comprarDoMesmoAtivo(qtdeAtualAtivoComprado, codAtivo);
    return await atualizarInformacoes(ativo[0].QtdeAtivo, qtdeAtivo, codAtivo, codCliente, saldoClienteAtualizado);
  } else {
    
    const saldoClienteAtualizado = verificarSaldoDisponivel(qtdeAtivo, ativo[0].Valor, cliente[0].Saldo);
    await investimentosModel.comprarAtivos(codAtivo, qtdeAtivo, codCliente);
    return await atualizarInformacoes(ativo[0].QtdeAtivo, qtdeAtivo, codAtivo, codCliente, saldoClienteAtualizado);
  };
};

const buscarClienteOuAtivo = async (cod) => {
  if (cod >= 100) {
    return await buscarAtivo(cod);
  };
  const cliente = await contaService.checarCliente(cod);
  const clienteEAtivos = await investimentosModel.buscarCliente(cod);
  if (clienteEAtivos.length === 0) {
    return { codCliente: cliente[0].codCliente, message: `Cliente sem ativos` };
  };
  return clienteEAtivos;
};

const buscarAtivo = async (cod) => {
  const ativo = await investimentosModel.buscarAtivo(cod);
  if(ativo.length === 0) {
    const erro = { status: 400, message: `Codigo do ativo inválido`};
    throw erro;
  }
  return ativo;
};

const verificarSaldoDisponivel = (qtdeAtivo, ativoValor, clienteSaldo ) => {
  const valorTotalCompra = qtdeAtivo * ativoValor;
    const saldoClienteAtualizado = clienteSaldo - valorTotalCompra;
    if (saldoClienteAtualizado < 0) {
      const erro = { status: 400, message: `Saldo insuficiente`};
      throw erro;
    };
    return saldoClienteAtualizado;
};

const atualizarInformacoes = async (qtdeAtivo, qtdeAtivoCompra, codAtivo, codCliente, saldoClienteAtualizado) => {
  const qtdeAtualAtivo = qtdeAtivo - qtdeAtivoCompra;
  await investimentosModel.atualizarQtdeAtivo(codAtivo, qtdeAtualAtivo);
  await investimentosModel.atualizarSaldo(codCliente, saldoClienteAtualizado);
  return { message: `Compra do ativo realizada com sucesso!`};
};

const buscarTodosAtivos = async () => {
  const ativos = await investimentosModel.buscarTodosAtivos();
  return ativos;
};

module.exports = {
  comprarAtivos,
  buscarAtivo,
  buscarClienteOuAtivo,
  buscarTodosAtivos,
}