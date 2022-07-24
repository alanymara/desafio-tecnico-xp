const connection = require('./connection');

const operacaoConta = async (operacao, codCliente, valor) => {
  const query = `INSERT INTO conta (operacao, codCliente, valor) VALUES
  (?, ?, ?);`;
  const resultado = await connection.execute(query, [operacao, codCliente, valor]);
  return resultado;
};

const atualizarSaldo = async (codCliente, saldoAtualizado) => {
  const query = 'UPDATE clientes SET saldo = ? WHERE codCliente = ?; ';
  const [resultado] = await connection.execute(query, [saldoAtualizado, codCliente]);
  return resultado;
};

const checarCliente = async (cod) => {
  const query = `SELECT codCliente AS CodCliente, saldo AS Saldo FROM clientes WHERE codCliente = ?;`;
  const [resultado] = await connection.execute(query, [cod]);
  return resultado;
};

module.exports = {
  operacaoConta,
  atualizarSaldo,
  checarCliente,
};