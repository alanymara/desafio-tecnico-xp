const contaModel = require('../models/conta.model');

const depositoConta = async ({ CodCliente, Valor }) => {
  const D = 'deposito';
  const cliente = await checarCliente(CodCliente);
  await contaModel.operacaoConta(D, CodCliente, Valor);
  const saldoAtualizado = cliente[0].Saldo + Valor;
  await contaModel.atualizarSaldo(CodCliente, saldoAtualizado);
  return { message: `Depósito realizado com sucesso. Saldo atualizado!`};
};

const saqueConta = async ({ CodCliente, Valor }) => {
  const S = 'saque';
  const cliente = await checarCliente(CodCliente);

  if (cliente[0].Saldo < Valor) {
    const erro = { status: 400, message: `Valor indisponível, seu saldo é $${cliente[0].Saldo}`};
    throw erro;
  }
  
  await contaModel.operacaoConta(S, CodCliente, Valor);
  const saldoAtualizado = cliente[0].Saldo - Valor;
  await contaModel.atualizarSaldo(CodCliente, saldoAtualizado);
  return { message: `Saque realizado com sucesso. Saldo atualizado!`};
}

const checarCliente = async (cod) => {
  const cliente = await contaModel.checarCliente(cod);
  if (cliente.length === 0) {
    const erro = { status: 400, message: 'Codigo do cliente inválido'};
    throw erro;
  }
  return cliente;
}

module.exports = {
  depositoConta,
  saqueConta,
  checarCliente,
}