const connection = require('./connection');

const depositoConta = async (operacao, codCliente, valor) => {
  const query = `INSERT INTO Investimentos.conta (operacao, codCliente, valor) VALUES
  (?, ?, ?);`;
  const resultado = await connection.execute(query, [operacao, codCliente, valor]);
  return resultado;
};

const atualizarSaldo = async (codCliente, saldoAtualizado) => {
  const query = 'UPDATE Investimentos.clientes SET saldo = ? WHERE codCliente = ?; ';
  const [resultado] = await connection.execute(query, [saldoAtualizado, codCliente]);
  return resultado;
};

module.exports = {
  depositoConta,
  atualizarSaldo,
};